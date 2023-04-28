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