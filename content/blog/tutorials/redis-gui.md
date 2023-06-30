+++
author = "Ronan McQuillan"
date = 2022-10-17T23:00:00Z
description = "Build a Redis GUI, to make the most out of your database, without memorizing any commands."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1666101435/cms/Redis_GUI_Header_xsetam.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1666101443/cms/Redis_GUI_Header_x4q75k.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a Redis GUI in 3 Steps"

+++
With a Redis GUI, you can make the most out of your database, without memorizing any commands.

Databases are incredible business tools. They allow you to store and manipulate large sets of data. That way, you can make better-informed decisions. They provide you with insights that just wouldn’t be possible with manual data storage.

But they can be quite complex.

Redis is a NoSQL database. It allows you to store data in key/value pairs. It’s a huge shift from the regular SQL paradigm of storing data in tables and rows.

For this reason, Redis is a great tool not just as your main database, but also as an auxiliary [data source](https://budibase.com/blog/data/data-sources/). You might use a regular DB for most of your data, then use Redis to store sessions, cached data, or really anything you want.

Usually, you can interact with your Redis database using the command line or a programming language. But you can use GUIs (Graphical User Interfaces), to make this process much easier.

With a Redis GUI, you can use a visual interface and just pick the commands you want to execute. In addition, if you want to run your own commands, you can do that too. You can even save custom commands, so you can grow your tool’s functionality over time.

Today you are going to learn how you can build your own Redis GUI in three easy steps. And you don’t even need to know how to code. You can build it using a free low-code builder like Budibase to connect to your database and execute these functions.

Let’s get started!

## Which is better: Redis or MongoDB?

Redis is usually slightly faster than MongoDB. But to understand which one is better you need to take into account your requirements.

Redis stores data as key/value pairs, while MongoDB uses documents and collections. MongoDB can handle more complex datasets, and for that, it sacrifices performance.

It’s worth mentioning that although Redis stores data as key/value pairs, it doesn’t mean that it can only store strings. The values of your database entries can be strings, lists, hashes, sets, and other data types.

On that note, we’ve also created a guide to building a [MongoDB GUI](https://budibase.com/blog/tutorials/mongodb-gui/) in Budibase.

## Is there a GUI for Redis?

Redis by itself doesn’t have an official GUI. But there are many good options for Redis GUI applications.

You can even build your own Redis GUI by following this tutorial. You can do it in just 3 steps and it requires no coding knowledge.

## How do I visualize a Redis Database?

The easiest way to visualize data is with a Redis GUI. With it, you can display data in any way you want, and get access to commands to manipulate data in many ways.

Today you are going to be a Redis GUI with just one screen. But it has two tabs. The first tab is for premade commands, like this:

![Redis GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1666101630/cms/01_yiwtpn.webp "Redis GUI")

This screen contains a form with the command to be executed and two options for how to get the key to be used, with a custom key or picking from a list:

![Dropdown selector](https://res.cloudinary.com/daog6scxm/image/upload/v1666101670/cms/02_ivk6vz.webp "Form Dropdown")

You can use the form to build your command and see the results. In this app, we are using a display design that resembles a command line. But you can customize this design in any way you want to with the Budibase components.

In addition to the premade commands, there’s the “Custom commands” tab. It’s a simple form that allows advanced users to run their own commands:

![Redis command](https://res.cloudinary.com/daog6scxm/image/upload/v1666101723/cms/03_lclo3y.webp "Premade Command")

Check out our in-depth guide to [form UI design](https://budibase.com/blog/app-building/form-ui-design/).

Therefore, you get the best of both worlds. You get quick access to premade commands, but if you want, you can build your own queries as well.

Now let’s build your app.

## Step 1 - Create an app and connect it to your database

If you haven’t already, sign up for Budibase. Then create a new app. If you just want to test out Redis, there’s a free cloud option on their website.

Back to Budibase, on the next screen, pick Redis as your data source and click on continue. Then add your database credentials:

![Configure Redis GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1666101744/cms/04_pctwd3.webp "Configure Redis GUI")

If you have any sort of firewall, don’t forget to whitelist the Budibase IP address.

Once you do this, Budibase can connect with your database.

Next, you can manipulate data using queries. Click on add new query to get this screen:

![Redis queries](https://res.cloudinary.com/daog6scxm/image/upload/v1666101847/cms/05_sfdmwy.webp "Redis queries")

In it, you can see a few connection types. These are quick commands in case you just want to use one of them. In the demo app, you could really have just one query. But to make this easier to follow along, let’s create two queries in your Redis GUI.

First:

* Query name: command
* Function: Redis command
* Bindings: command (default value ping)
* Fields: {{ command }}

And then:

* Query name: get_keys
* Function: Redis command
* No bindings
* Fields: keys *
* Transformer: return data\[0\]

The first query is the one you are going to use in your app to load data. After your users fill in the form fields, you send data to this query and display the results.

The second query is used to get a list of the field keys to be used in the dropdown. We use this transformer because a Redis command returns an array by default.

It’s much harder to use this kind of data in components such as options pickers or even tables, repeaters, and cards.

So we transform the default data response from this:

[
[
"firstkey",
"anotherkey",
"newkey"
]
]

Into this:

[
    "firstkey",
    "anotherkey",
    "newkey"
]

That’s all you need on the “Data” tab. Let’s move on to the “Design” tab now.

## Step 2 - Create your tabs and forms

Go to Design > Theme. In this section, you can set up what your Redis GUI looks like. Pick the dark theme, and set the button roundness to zero:

![Redis GUI design](https://res.cloudinary.com/daog6scxm/image/upload/v1666101981/cms/06_nubmxq.webp "App theme")

You can use round buttons if you want, but with this setting, it’s easier to create your tabs design.

Also, you can add other styling options such as a background color in your header. Click on _Navigation_, and then add this as the background color:

{{< highlight css "linenos=inline" >}}

radial-gradient(circle farthest-corner at 10% 20%, 
rgba(174,14,87,1) 0%, 
rgba(174,116,12,1) 90% )

{{< /highlight >}}

You can use not only regular colors but also CSS gradients as well.

On this screen, you can delete the navigation links in case you want a one-page app as we have in our demo.

Now go to screens, add new and pick a blank screen.

This is the elements tree for this portion of the tutorial:

![Component Tree](https://res.cloudinary.com/daog6scxm/image/upload/v1666102092/cms/07_qr5h1q.webp "Component Tree")

First, add a container component to hold your tabs buttons. Set this container to the horizontal direction, and align left:

![Container Direction](https://res.cloudinary.com/daog6scxm/image/upload/v1666102110/cms/08_tiopr3.webp "Container Direction")

With these settings, your buttons are going to be on the same line, and they will be next to each other.

Then add the two buttons to pick which is the active tab. Both have the quiet design selected and this onClick action:

![Button Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1666102166/cms/09_swn7tf.webp "Button Actions")

This action saves the current tab. So it’s either Premade or Custom.

Also, make sure that the component name is correct, as we use the name in the tab’s styling.

Now you can add an embed component with this code:

{{< highlight javascript "linenos=inline" >}}

<style type='text/css'>
div[data-name="{{ State.tab }} Commands"] > 
button { background: #000 ! important 
</style>

{{< /highlight >}}

The trick here is to apply a CSS background color only to the tab with the name “\[state\] Commands”. This is what this embed code does.

Now you need to switch back and forth between the tabs. You can hide and show the tab contents using the display conditions for each of the containers.

The “premade” container has these display conditions:

![Redis GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1666102230/cms/10_qvv2bq.webp "Redis GUI")

It’s “hide” if {{ State.tab }} is Custom. And the custom container is the other way around. The display condition there is the “show” if {{ State.tab }} is Custom.

Thus, when one container is visible, the other is hidden at all times.

Both these containers are inside another container. This component is there just to hold the border that goes around the tabs. You can use this CSS code in it:

{{< highlight css "linenos=inline" >}}

border: 5px solid #000;
margin-top: -34px

{{< /highlight >}}

And then use some paddings as well if you want. In our demo we have 16px top/bottom and 20px left/right.

Moving on, add a form inside the premade container, this form is there just to hold the form components.

Add an options picker for the “command”. You can manually add the command names you use the most.

If you want a more complex solution, you can get them from a database. This allows you to quickly load most, if not all, Redis commands.

The key type is an options picker with the “radio button” style, in the horizontal mode:

![keyType component tree](https://res.cloudinary.com/daog6scxm/image/upload/v1666102259/cms/11_kts4hc.webp "KeyType")

This options picker has two custom options just like the previous one.

Now we want to hide/show the text input or the dropdown for the field keys.

The technique is quite similar to what you used for the tabs. Create containers around each of the options and for the customkey use this display condition:

Hide component if {{ Query.Fields.keytype }} is equal to current

And use the opposite condition on the currentKey container. So make it show the component if the keyType is current.

This ensures that only one of them is visible at a time since they have opposing conditions.

The customkey text field is a simple text field. The current keys picker uses a data provider with the get_keys query:

![get_key component](https://res.cloudinary.com/daog6scxm/image/upload/v1666102290/cms/12_m1kvb7.webp "get_keys component")

Then, on the options picker, select the data provider as your options source:

![currentKeys](https://res.cloudinary.com/daog6scxm/image/upload/v1666102311/cms/13_phj0da.webp "currentKeys")

You can add a text field for additional parameters, and also a text field for the custom query. They are simple text fields.

The real magic happens on the “Run query” button.

There are two buttons, one for each tab. Both of them do the same thing. The run button saves the current form fields as a “query” appState.

Here is an example:

![Button Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1666102363/cms/14_klxqlt.webp "Button Actions")

In the premade tab, you can use this JS code:

{{< highlight javascript "linenos=inline" >}}

var field = $("Query.Fields.keytype");
if ( field && "custom" == field) {
field = $("Query.Fields.customkey");
} else {
field = $("Query.Fields.currentkeys");
}
return $("Query.Fields.command") + 
" " + field + " " + $("Query.Fields.more")

{{< /highlight >}}

This code snippet saves the command, field, and the additional parameters as a single text line in the “query” appState.

That’s what allows your Redis GUI to load commands as your users pick them.

You’ll use a very similar approach to the custom query tab. The “run” button in this case simply saves the “query” appstate with this value:

*{{ CustomQuery.Fields.fullcommand }}*

Therefore, the “query” appState is just a mirror of the value in the text field for the custom query tab.

Now let’s process and display this data.

## Step 3 - Display your Redis GUI data

There are just a couple of components left to build your Redis GUI. This is the components tree for that section of the page:

![Response data provider](https://res.cloudinary.com/daog6scxm/image/upload/v1666102413/cms/15_vug3o7.webp "Response data provider")

There are two markdown components.

The first one contains the query command. It is that stylized command that looks like a command prompt with a > sign and a different color for the first word.

As you might have guessed, this component reads data from the query appState.

To make it look like a command line, add this Custom CSS to it:

font-family: Monaco, Consolas, 'Courier New', 'Courier', monospace

Then on the markdown contents use this JS function:

{{< highlight javascript "linenos=inline" >}}

var query = $("State.query");
if ( ! query ) {
query = "ping";
}
query = query.split(' ');
query[0] = "<div style='background: 
rgba(255, 255, 255, 0.1);
padding: 5px 10px'>
<strong style='color: rgb(234 179 8)'>> 
</strong>
<strong style='color: rgb(147, 45, 250)'>" 

query[0] + " </strong> <strong> ";
last = query.length - 1;
query[last] = query[last] + "</strong></div>";
query = query.join(" ");
return query

{{< /highlight >}}

This function checks if the query appState is set. If it isn’t, it sets it with the default state (ping). Then, it breaks the command down into two parts, the first one gets a different color, and the second part is bold.

The results data provider is calling your generic “command” query. You can pass the query appState as a binding:

![Redis GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1666102487/cms/16_udk3ic.webp "Redis GUI")

To make sure that the default data is correctly used, you can use this JS function:

{{< highlight javascript "linenos=inline" >}}

if ( $("State.query") ) {
return $("State.query");
} else {
return "ping"
}

{{< /highlight >}}

So it either returns the query appState or a ping command.

The data itself is all extracted into a paragraph. You can use this JS function in it:

{{< highlight javascript "linenos=inline" >}}

var data = $("results.Rows");
if ( data && data.length > 0 ) {
data = JSON.stringify(data, null, '\t')
} else {
data = 
"no data - check if your command is correct";
}
return data;

{{< /highlight >}}

This code checks if there are valid results. If there are, use the stringify function to display the variables nicely. If there is no data, display an error message.

## How to build a Redis GUI with Budibase

Today you learned how you can create a Redis GUI app without coding. You learned some basic Redis database interactions, but also advanced settings in Budibase. These steps can be used to build any GUI or app you want.

The sky is the limit now. You can improve your app by saving command lines, allowing multiple commands, and adding logs.

Check out our ultimate guide to building a [database GUI](https://budibase.com/blog/tutorials/database-gui/) in Budibaes for more inspiration.

We hope you enjoyed it, and see you again next time!