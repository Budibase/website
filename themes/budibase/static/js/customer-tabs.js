function openCustomer(evt, pricingName) {
  var i, tablinks;


  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(pricingName).style.display = "block";
  evt.currentTarget.className += " active";
}