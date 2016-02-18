/*
  Calculations
*/

function totalIt() {
  var total = 0;
  if (document.getElementById('shoes').checked){
    total += 5;
  }
  if (document.getElementById('bicycle').checked){
    total += 210;
  }
  if (document.getElementById('chevyM').checked){
    total += 25000;
  }
  if (document.getElementById('agera').checked){
    total += 2400000;
  }

  document.getElementById('total').innerHTML = total;
}
