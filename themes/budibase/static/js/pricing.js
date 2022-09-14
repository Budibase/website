const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

/**
 * Given the supplies plan type and day passes data, set the picker options
 */
const setPickerOptions = (planType, dayPassesMap) => {
  // add the options for this plan type
  const pickerElement = document.getElementById(`${planType}-select`)
  Object.entries(dayPassesMap).forEach(([dayPasses, prices], index) => {
    pickerElement.options[index] = new Option(`${dayPasses} day passes /mo`, dayPasses)
  })

  // add listener to render selected price
  pickerElement.addEventListener("change", e => {
    const dayPasses = e.target.value
    const yearlyPrice =  dayPassesMap[dayPasses].yearly
    const monthlyPrice =  dayPassesMap[dayPasses].monthly

    const parent = e.target.parentElement
    parent.querySelector(".plan-price").innerHTML = `${formatPrice(yearlyPrice)}`
    parent.querySelector(".plan-price-monthly").innerHTML = `${formatPrice(monthlyPrice)} billed monthly`
  })

  // send initial change event to render selected price
  const firstDayPass = Object.keys(dayPassesMap)[0]
  const event = new Event("change", { target: { value: firstDayPass }})
  pickerElement.dispatchEvent(event)
}

const getDayPassesMap = (plan) => {
  // e.g. { 100: { yearly: { dayPasses: 100, amountMonthly: 250000}, monthly: { dayPasses: 100, amountMonthly: 220000 } }
  return plan.prices.reduce((curr, price) => {
    if (!curr[price.dayPasses]) {
      curr[price.dayPasses] = {}
    }
    curr[price.dayPasses][price.duration] = price
    return curr
  }, {})
}

function formatPrice (price) {
  return numberFormatter.format(price.amountMonthly / 100)
}

function getPlans () {
  return [
    {
      "type": "team",
      "prices": [
        {
          "priceId": "price_1LhIQ3BkHwGm6cL2RDB7mNmw",
          "amount": 307200,
          "amountMonthly": 25600,
          "currency": "usd",
          "duration": "yearly",
          "dayPasses": 400
        },
        {
          "priceId": "price_1LhIPtBkHwGm6cL2FHHkPfSB",
          "amount": 30720,
          "amountMonthly": 30720,
          "currency": "usd",
          "duration": "monthly",
          "dayPasses": 400
        },
        {
          "priceId": "price_1LhIOrBkHwGm6cL2YrF8JMCI",
          "amount": 237600,
          "amountMonthly": 19800,
          "currency": "usd",
          "duration": "yearly",
          "dayPasses": 300
        },
        {
          "priceId": "price_1LhIOhBkHwGm6cL2M3boe6t9",
          "amount": 23760,
          "amountMonthly": 23760,
          "currency": "usd",
          "duration": "monthly",
          "dayPasses": 300
        },
        {
          "priceId": "price_1LhINnBkHwGm6cL2TPHdCnxW",
          "amount": 163200,
          "amountMonthly": 13600,
          "currency": "usd",
          "duration": "yearly",
          "dayPasses": 200
        },
        {
          "priceId": "price_1LhINbBkHwGm6cL2q2XIs3az",
          "amount": 16320,
          "amountMonthly": 16320,
          "currency": "usd",
          "duration": "monthly",
          "dayPasses": 200
        },
        {
          "priceId": "price_1LhEDgBkHwGm6cL2Iq7iA9SI",
          "amount": 84000,
          "amountMonthly": 7000,
          "currency": "usd",
          "duration": "yearly",
          "dayPasses": 100
        },
        {
          "priceId": "price_1LhEDgBkHwGm6cL2fbgY5T44",
          "amount": 8400,
          "amountMonthly": 8400,
          "currency": "usd",
          "duration": "monthly",
          "dayPasses": 100
        }
      ]
    },
    {
      "type": "pro",
      "prices": [
        {
          "priceId": "price_1LhILuBkHwGm6cL275G0XODg",
          "amount": 52200,
          "amountMonthly": 4350,
          "currency": "usd",
          "duration": "yearly",
          "dayPasses": 75
        },
        {
          "priceId": "price_1LhILiBkHwGm6cL24aEokQLf",
          "amount": 5220,
          "amountMonthly": 5220,
          "currency": "usd",
          "duration": "monthly",
          "dayPasses": 75
        },
        {
          "priceId": "price_1LhEMPBkHwGm6cL2ZIu2viYE",
          "amount": 36000,
          "amountMonthly": 3000,
          "currency": "usd",
          "duration": "yearly",
          "dayPasses": 50
        },
        {
          "priceId": "price_1LhEJLBkHwGm6cL2x229Fhml",
          "amount": 3600,
          "amountMonthly": 3600,
          "currency": "usd",
          "duration": "monthly",
          "dayPasses": 50
        }
      ]
    },
    {
      "type": "business",
      "prices": [
        {
          "priceId": "price_1LhFG7BkHwGm6cL2an5PKMK9",
          "amount": 936000,
          "amountMonthly": 78000,
          "currency": "usd",
          "duration": "yearly",
          "dayPasses": 1000
        },
        {
          "priceId": "price_1LhFFsBkHwGm6cL2YCw3Vwvh",
          "amount": 93600,
          "amountMonthly": 93600,
          "currency": "usd",
          "duration": "monthly",
          "dayPasses": 1000
        },
        {
          "priceId": "price_1LhETVBkHwGm6cL2dPglUpQr",
          "amount": 1776000,
          "amountMonthly": 148000,
          "currency": "usd",
          "duration": "yearly",
          "dayPasses": 2000
        },
        {
          "priceId": "price_1LhETKBkHwGm6cL2jM6LdKXk",
          "amount": 177600,
          "amountMonthly": 177600,
          "currency": "usd",
          "duration": "monthly",
          "dayPasses": 2000
        },
        {
          "priceId": "price_1LhERBBkHwGm6cL2saU3WM8l",
          "amount": 1368000,
          "amountMonthly": 114000,
          "currency": "usd",
          "duration": "yearly",
          "dayPasses": 1500
        },
        {
          "priceId": "price_1LhERBBkHwGm6cL26EbtKKFI",
          "amount": 136800,
          "amountMonthly": 136800,
          "currency": "usd",
          "duration": "monthly",
          "dayPasses": 1500
        },
        {
          "priceId": "price_1LhEP7BkHwGm6cL2oiYvoKHo",
          "amount": 480000,
          "amountMonthly": 40000,
          "currency": "usd",
          "duration": "yearly",
          "dayPasses": 500
        },
        {
          "priceId": "price_1LhEP7BkHwGm6cL2GjO9LuKU",
          "amount": 48000,
          "amountMonthly": 48000,
          "currency": "usd",
          "duration": "monthly",
          "dayPasses": 500
        }
      ]
    }
  ]
}

function init () {
  const plans = getPlans()
  const planTypes = plans.map(p => p.type)
  for (let planType of planTypes) {
    const plan = plans.filter(p => p.type === planType)[0]
    const dayPassesMap = getDayPassesMap(plan)
    setPickerOptions(plan.type, dayPassesMap)
  }
}

init()

const goToAccountPortal = (planType) => {
  let path
  let query = ""

  if (planType && planType === "free") {
    path = "register"
  } else {
    path = "register"
    query = "?redirect=/portal/upgrade"
  }

  if (window.location.href.includes("localhost")) {
    window.open(`http://localhost:10001/${path}${query}`, '_blank')
  } else {
    if (query) {
      query = query + "&"
    } else {
      query = "?"
    }
    query = query + "utm_source=website&utm_medium=cta&utm_campaign=open-source-pricing"
    window.open(`https://account.budibase.app/${path}${query}`, '_blank')
  }
}