/*
  Mortgage fancy stuff
*/

function underlineTitle(id) {
  document.getElementById(id).className = "underlined";
}
function noUnderlineTitle(id) {
  document.getElementById(id).className = "noUnderline";
}

function setFocus(id) {
  document.getElementById(id).focus();
}
function clearHtml(id) {
  document.getElementById(id).innerHTML = '';
}

function showWarning(){
  document.getElementById('warning').innerHTML = '*Please correctly fill out all fields*';
  document.getElementById('warning').className = 'see';
}

function hideWarning(){
  document.getElementById('warning').className = 'noSee';
}
