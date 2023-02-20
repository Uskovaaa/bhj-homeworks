
const getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

//недопущение кликов больше одного
let clicker = null;

//вывод информации и обнуление результатов по окончании игры
const checkGame = (result) => {
  setTimeout = () => {
    result ? alert('Вы победили!') : alert('Вы проиграли!');
    dead.textContent = 0;
    lost.textContent = 0;
  }, 1;
}


for(let i = 1; i < 10; i++) {
  let hole = getHole(i);
  hole.onclick = () => {
    if(hole.classList.contains('hole_has-mole')) {
      if(clicker !== i) {
        dead.textContent++;
        clicker = i;
        if(dead.textContent == 10) checkGame(true);
      } 
    }
    else {
      lost.textContent++;
      if(lost.textContent == 5) {
        //чтобы более 5 кликов не считалось - onclick присваиваем null
        hole.onclick = null;
        checkGame(false);
      } 
    }
  }
}
  





