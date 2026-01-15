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
    query = query + "utm_source=website&utm_medium=cta&utm_campaign=pricing"
    window.open(`https://account.budibase.app/${path}${query}`, '_blank')
  }
}

const setHostingView = (hosting) => {
  const containers = document.querySelectorAll(".pricing-hosting")
  if (!containers) {
    return
  }


  containers.forEach(container => {
    container.dataset.hosting = hosting
  }) 

  const buttons = document.querySelectorAll(".pricing-hosting-button")
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.hosting === hosting)
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".pricing-hosting")
  if (!container) {
    return
  }

  const buttons = document.querySelectorAll(".pricing-hosting-button")
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setHostingView(button.dataset.hosting)
    })
  })

  setHostingView(container.dataset.hosting || "cloud")
})
