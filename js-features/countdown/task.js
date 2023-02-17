
//Task 1
const timer = document.getElementById('timer');
let intervalId = setInterval(function () {
      
  if (timer.textContent <= 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!')
  }
  else {
    timer.textContent--;
  }
      
}, 1000);  


//Task 2,3
// const hh = document.getElementById('hh');
// const mm = document.getElementById('mm');
// const ss = document.getElementById('ss');
    
// //задержка полученных секунд в милисекундах 
// let delay = +ss.textContent * 1000; 

    
// function sec() {
// //интервал каждую секунду выполняет следующие действия
//   let intervalSec = setInterval(() => {
//     //уменьшает текущие секунды на 1
//     ss.textContent--;
//     //проверяет, если длина ss.textContent меньше 2, то приписывает 0, иначе получает текущие значение переменной
//     ss.textContent = ss.textContent.length < 2 ? '0' + ss.textContent : ss.textContent;
//     //если секунды, минуты и часы = 0, то интервал удаляется, программа завершается
//     if (ss.textContent == 0 && mm.textContent == 0 && hh.textContent == 0) {
//       clearInterval(intervalSec);
//       location.assign('https://drive.google.com/file/d/1h3AR_cnXNQFZtGJBaihXoIlR015TSuH8/view?usp=share_link');
//     }
//     //если секунды = -1, а минуты = 0, то минутам даём значение 60 (чтоб в функции min вычесть 1 сразу), секундам присваиваем 59, часы уменьшаем на 1
//     else if (ss.textContent == -1 && mm.textContent == 0) {
//       mm.textContent = 60;
//       min();
//       ss.textContent = 59;
//       hour();
//     }
//     //если секунды = -1, а минуты > 0, то минуты также уменьшаем через функцию min на 1, секундам присваиваем 59 
//     else if(ss.textContent == -1 && mm.textContent > 0) {
//       min();
//       ss.textContent = 59;
//     }
//   }, 1000);
// }

// sec();

// function min() {
//   mm.textContent--;
//   mm.textContent = mm.textContent.length < 2 ? '0' + mm.textContent : mm.textContent;
// }

// function hour() {
//   hh.textContent--;
//   hh.textContent = hh.textContent.length < 2 ? '0' + hh.textContent : hh.textContent;
// }