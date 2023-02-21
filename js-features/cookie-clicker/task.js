//Task 1, 2
const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
const clickerMaxSpeed = document.getElementById('clicker__max-speed');

let clickEnd, clickStart;
clickerMaxSpeed.textContent = '0.00';

cookie.onclick = function() {
  cookie.width = ++clickerCounter.textContent % 2 ? 250 : 200;

  clickEnd = Date.now();

  if(clickerCounter.textContent == 1) {
    clickerSpeed.textContent = '0.00';
    clickStart = clickEnd;
  } 
  else {
    clickerSpeed.textContent = (1000/(clickEnd - clickStart)).toFixed(2);
    clickStart = clickEnd;
  
    if(clickerSpeed.textContent > clickerMaxSpeed.textContent) {
      clickerMaxSpeed.textContent = clickerSpeed.textContent;
    }
  }
}

