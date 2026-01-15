function openPricing(evt, pricingName) {
  var i, pricingBlocks, tablinks;

  pricingBlocks = document.querySelectorAll("[data-pricing-period]");
  for (i = 0; i < pricingBlocks.length; i++) {
    pricingBlocks[i].classList.toggle(
      "is-active",
      pricingBlocks[i].dataset.pricingPeriod === pricingName
    );
  }

  tablinks = document.getElementsByClassName("pricing-period-tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  evt.currentTarget.classList.add("active");
}
