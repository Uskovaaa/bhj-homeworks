//Task 1
const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');

cookie.onclick = function() {
  cookie.width = 300;
  clickerCounter.textContent++;
}

setInterval(() => {
  cookie.width = 200;
}, 300)

