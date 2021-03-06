// variable is created outside to allow change
var letColor = 'rgb(0,255,0)';
// This creates a code rain type background
function matrixThis(){
  var ratio = window.devicePixelRatio || 1;
  var body = document.body;
  var html = document.documentElement;
  var width = document.getElementById('matrixCa').width = document.documentElement.clientWidth;
  var height = document.getElementById('matrixCa').height =
      Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );
  var letters = Array(256).join(1).split('');

  var draw = function () {
    document.getElementById('matrixCa').getContext('2d').fillStyle='rgba(0,0,0,.05)';
    document.getElementById('matrixCa').getContext('2d').fillRect(0,0,width,height);
    document.getElementById('matrixCa').getContext('2d').fillStyle=letColor;
    letters.map(function(y_pos, index){
      text = String.fromCharCode(65393+Math.random()*33);
      x_pos = index * 10;
      document.getElementById('matrixCa').getContext('2d').fillText(text, x_pos, y_pos);
      letters[index] = (y_pos > (height - 600) + Math.random() * 1e4) ? 0 : y_pos + 10;
    });
  };
  setInterval(draw, 80);
}
// change matrix text color
function setMaColor(newColor){letColor = newColor;}
