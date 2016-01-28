function changeGlow(toBe) {
  var cur = document.getElementById('Form').className;
  var list = document.getElementsByClassName(cur);

  switch (toBe){
    case 'red':
    toBe = 'glowRed';
    setMaColor('rgb(255,0,0)');
    break;
    case 'blue':
    toBe = 'glowBlue';
    setMaColor('rgb(0,0,255)');
    break;
    case 'green':
    toBe = 'glowGreen';
    setMaColor('rgb(0,255,0)');
    break;
  }
  if (toBe != cur){
    while (list.length){
      list[0].className = toBe;
    }
  }
}
/*
Calling the setMaColor probably isn't 
the greatest thing to do, but this is just
for the fun of it
*/
