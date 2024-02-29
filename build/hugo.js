#!/usr/bin/env node
"use strict";
const fs = require("fs");
const fse = require("fs-extra");
const prompts = require("prompts");
const sdk = require("api")("@budibase/v2.2.0#3iote64ll1c4frc5");

const dotenv = require("dotenv");
dotenv.config();

let config = {
  root: "../", // Root hugo folder, can be empty
  type: "plugin",
  // Type name [basically layout] (save it under "layouts/NAME/single.html" or themes/THEME/layouts/NAME/single.html).
  // Can be overridden on individual pages by defining "type" under "fields"

  // pages: "plugins", // Pages element in your data, in case it's "posts" or "articles" etc.
  contentPath: "data", // Path to content directory (in case it's not "content")
  hugoPath: process.env.HUGO_PATH, // Path to hugo binary (if global, e.g. /snap/bin/hugo)
};

const getDataFromApi = async () => {
  const { BB_API_KEY, BB_APP_ID, BB_TABLE_ID } = process.env;

  sdk.auth(BB_API_KEY);
  sdk.server("https://budibase.app/api/public/v1");
  const res = await sdk.postTablesTableidRowsSearch(
    { limit: 1000 },
    {
      tableId: BB_TABLE_ID,
      "x-budibase-app-id": BB_APP_ID,
    }
  );
  const filtered = res.data.data.filter(i => !i.Hidden);
  return filtered;
};

const toKebabCase = (string) => {
  return (
    string &&
    string
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("-")
  );
};

const dataToJSON = (object) => {
  const { Email, _id, type, ...cleanObj } = object;
  cleanObj.layout = "plugin";
  return JSON.stringify(cleanObj);
};

const build = async (add, force) => {
  if (typeof add === "undefined") add = true;
  if (typeof force === "undefined") force = false;
  if (!config.contentPath || config.contentPath === "/")
    return console.log("Error: config.contentPath cannot be '' or '/')!");
  let data;
  try {
    data = await getDataFromApi();
  } catch (e) {
    return console.log("error: ", e);
  }
  if (!data) return console.log("No data");
  let pages = config.pages ? data[config.pages] : data;
  for (let i in pages) {
    const page = pages[i];
    const pagePath = config.root + config.contentPath + "/" + page.PluginType;
    const filePath = `${pagePath}/${toKebabCase(page.PluginName)}.json`;

    if (add) {
      fse.ensureDirSync(pagePath);
      fs.writeFileSync(filePath, dataToJSON(page));
      console.log("Created file: " + filePath);
    } else if (fs.existsSync(pagePath)) {
      let response;
      if (!force) {
        response = await prompts({
          type: "confirm",
          name: "value",
          message: "Delete " + pagePath + " ?",
        });
      }

      if (force || response.value) {
        fse.removeSync(pagePath);
        console.log("Removed folder: " + pagePath);
      }
    }
  }
};

const main = async (argvs) => {
  const mode = typeof argvs._[0] === "undefined" ? "default" : argvs._[0];
  const force = typeof argvs["force"] === "undefined" ? false : true;
  const configFile =
    typeof argvs["configFile"] === "undefined"
      ? false
      : require("./" + argvs["configFile"]);
  Object.assign(config, configFile); //overriding default settings
  config.root = (!!config.root ? config.root : ".") + "/";
  const { execSync } = require("child_process");
  if (mode === "server") {
    //server mode - create data-generated files, run hugo server, remove data-generated files on stop
    console.log("Building data-generated files...");
    await build();
    console.log("Running Hugo Server...");
    process.on("SIGINT", () => {}); //Not exiting on ctrl+c (instead, going to "catch" clause)
    try {
      await execSync(
        "(cd " + config.root + " && " + config.hugoPath + " server)"
      );
    } catch (e) {
      console.log("Removing data-generated files...");
      await build(false, force);
    }
  } else if (mode === "generate") {
    //generate - just create data-generated files (no hugo running, and no removal)
    console.log("Building data-generated files...");
    await build();
  } else if (mode === "clean") {
    //clean - just remove data-generated files
    console.log("Removing data-generated files...");
    await build(false, force);
  } else {
    //default behavior - create data-generated files, run hugo build, remove data-generated files
    console.log("Building data-generated files...");
    await build();
    console.log("Running Hugo (build)...");
    await execSync("(cd " + config.root + " && " + config.hugoPath + ")");
    console.log("Removing data-generated files...");
    await build(false, force);
  }

  console.log("Done!");
};

// Defining commands and flags
const argvs = require("yargs")
  .command("$0", "Generate folders/files from data, then run `hugo build`")
  .command(
    "generate",
    "Generate folders/files from data (does not run hugo build)"
  )
  .command(
    "server",
    "Generate folders/files from data, run `hugo server`, then cleanup on exit"
  )
  .command("clean", "Trigger cleanup manually")
  .option("force", {
    alias: "f",
    description:
      "Use this flag to skip folder removal prompts (be careful with this one!)",
  })
  .option("configFile", {
    alias: "c",
    description: "Optionally use an external config file (JSON format only)",
  }).argv;

main(argvs);
