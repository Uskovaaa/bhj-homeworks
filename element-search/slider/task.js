const sliderPrev = document.querySelector('.slider__arrow_prev');
const sliderNext = document.querySelector('.slider__arrow_next');

const sliderItem = document.querySelectorAll('.slider__item');
const sliderDot = document.querySelectorAll('.slider__dot');


let sliderItemArray = Array.from(sliderItem); //слайдер с фотографиями преобразован в массив

//поиск позиции активного слайда
let index = sliderItemArray.findIndex(value => {         //индекс элемента сохраняется в переменную index
  if(value.classList.contains('slider__item_active')) { //если слайд активен, то возвращаем сам элемент
    return value;                                       //метод findIndex возвращает индекс данного элемента
  }
});

//функция деактивации слайда и точки на позиции index
function remover(index) {
  sliderItem[index].classList.remove('slider__item_active');
  sliderDot[index].classList.remove('slider__dot_active');
}

//функция проверки и добавляения новых слайда и индекса 
function check(position) { 
  if(position < 0) {                 
    position = sliderItem.length - 1; 
    index = sliderItem.length - 1;    //необходимо обновить значение переменной index, иначе позиция будет меньше 0
  }

  if(position >= sliderItem.length) {
    position = 0;
    index = 0; //необходимо обновить значение переменной index, иначе позиция будет больше длины массива
  }
  sliderItem[position].classList.add('slider__item_active');
  sliderDot[position].classList.add('slider__dot_active');
}

//событие клика на правую стрелку (вперёд)
sliderNext.onclick = () => {
  remover(index); //деактивируем активный слайд
  index++;        
  check(index);   //передаём в функцию значение слайда +1
}

//событие клика на левую стрелку (назад)
sliderPrev.onclick = () => {
  remover(index); //деактивируем активный слайд
  index--;
  check(index);   //передаём в функцию значение слайда -1
}

//собыие клика на точку
 for( let i = 0; i < sliderDot.length; i++ ) {
  sliderDot[i].onclick= () => { //получаем позицию точки, на которую кликнули
   let k = index;               //запоминаем позицию активного элемента
    index = i;                  //запоминаем позицию точки, на которую кликнули
    check(index);               //передаём позицию точки, на которую кликнули, в функцию проверки для отображения
    remover(k);                 //передаём позицию активного слайда в функцию деактиации
  }
 }