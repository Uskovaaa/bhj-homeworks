//Task 1, 2
const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');

let clickEnd, clickStart;

cookie.onclick = function() {
  cookie.width = 300;
 
  clickEnd = Date.now();
  clickerCounter.textContent++;
  if(clickerCounter.textContent == 1) {
    clickerSpeed.textContent = '0.00';
    clickStart = clickEnd;
  } 
  else {
    clickerSpeed.textContent = (1000/(clickEnd - clickStart)).toFixed(2);
    clickStart = clickEnd;
  }
}


setInterval(() => {
  cookie.width = 200;
}, 300);

