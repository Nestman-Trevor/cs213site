/*
Mortgage Math
*/
function calcMortgage() {
  //principle amount (amount borrowed)
  var pri = Number(document.getElementById('amount').value);
  //monthly interest rate
  var i = ((Number(document.getElementById('apr').value) / 100) / 12);
  //number of payments months
  var num = (Number(document.getElementById('years').value) * 12);

  if (allFilled(pri, i, num)) {
    //monthly mortgage payment
    var mp = monthlyPayment(pri, i, num);

    //display monthly mortgage payment
    document.getElementById('results').innerHTML = mp.toString();
  }
}

function allFilled(p, i, n) {
  if (i == '') {
    document.getElementById('apr').focus();
    showWarning();
    return false;
  }
  else if (n == '') {
    document.getElementById('years').focus();
    showWarning();
    return false;
  }
  else if (p == '') {
    document.getElementById('amount').focus();
    showWarning();
    return false;
  }
  else {
    hideWarning();
    return true;
  }
}

function showWarning(){
  document.getElementById('warning').className = 'see';
}

function hideWarning(){
  document.getElementById('warning').className = 'noSee';
}

function monthlyPayment(p, i, n) {
  var mp = p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  return mp.toFixed(2); //round and give two decimal places
}

function calcIfPossible() {
  var mp = document.getElementById('results').innerHTML;
  if (mp != '')
    calcMortgage();
}

function clearHtml(id) {
  document.getElementById(id).innerHTML = '';
}
