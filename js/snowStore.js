function overBut(id){
  switch (id) {
    case 'home':
    case 'main':
        document.getElementById(id).className = 'btnDark btnLeftGreen downClickMvRight';
      break;
    case 'shop':
    case 'sub':
        document.getElementById(id).className = 'btnDark btnRightGreen downClickMvLeft';
    break;
  }
}
function outBut(id){
  switch (id) {
    case 'home':
    case 'main':
        document.getElementById(id).className = 'btn btnLeftBlue';
      break;
    case 'shop':
    case 'sub':
        document.getElementById(id).className = 'btn btnRightBlue';
    break;
  }
}
