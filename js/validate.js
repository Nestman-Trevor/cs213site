/*
  Validate info
*/

function phoneValidate() {
  var phone = document.checkout.phone.value;
  if (!phone.search(/\d{3}\-\d{3}\-\d{4}/)) {
    return true;
  }
  else {
    return false;
  }
}

function ccNumberValidate() {
  var ccNum = document.checkout.ccNumber.value;
  if (!ccNum.search(/\d{16}/)) {
    return true;
  }
  else {
    return false;
  }
}

function ccExpirationValidate() {
  var ccExp = document.checkout.ccExpiration.value;

  // We need today's date
  var today = new Date();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  // First, check if it's numbers and good format
  if (!ccExp.search(/\d{2}\s\d{4}/)) {
    var year = ccExp.substr(3, 4);
    var month = ccExp.substr(0, 2);
    // Expiration year is bigger
    if (yyyy < year){
      return true;
    }
    // Check year and month
    else if (yyyy <= year && mm <= month) {
      return true;
    }
    // cc Expired
    else {
      return false;
    }
  }
  // Wrong format
  else {
    return false;
  }
}

function markBad() {
  if (!phoneValidate()) {
    document.getElementById('warning').innerHTML += "<br>* Bad Phone Number *";
  }
  if (!ccNumberValidate()) {
    document.getElementById('warning').innerHTML += "<br>* Bad Credit Card Number *";
  }
  if (!ccExpirationValidate()) {
    document.getElementById('warning').innerHTML += "<br>* Invalid Credit Card Expiration Date *";
  }
}

function allValid() {
  if (phoneValidate() && ccNumberValidate()
      && ccExpirationValidate()) {
    return true;
  }
  else {
    showWarning();
    markBad();
    return false;
  }
}
