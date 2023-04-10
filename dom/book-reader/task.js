const book = document.querySelector('.book');

const fontSize = document.querySelectorAll('.font-size');
const fontSizeArr = Array.from(fontSize);

//Получение индекса активной кнопки
let index = fontSizeArr.findIndex(i => {
  if(i.classList.contains('font-size_active')){
    return i;
  }
});

//Текущий размер шрифта
let sizeCurrent = fontSizeArr[index].dataset.size;

fontSizeArr.forEach((item, i) => {
  item.onclick = () => {
    fontSizeArr[index].classList.remove('font-size_active'); //удаляем активность текущей кнопки 
    item.classList.add('font-size_active'); //добавляем активность нажатой кнопки
    index = i; //новую кнопку делаем текущей активной

    let sizeNew = item.dataset.size; //получаем новый размер шрифта
    book.classList.remove(`book_fs-${sizeCurrent}`) //удаляем текущий размер шрифта
    book.classList.add(`book_fs-${sizeNew}`); //добавляем новый размер шрифта
    sizeCurrent = fontSizeArr[index].dataset.size; //новый размер делаем текущим

    return false;
  }
  
});

//Повышенная сложность

const color = document.querySelectorAll('.color');
const colorArr = Array.from(color);

//Получеам индекс цвета текста элемента
let indexTextColor = colorArr.findIndex(i => {
  if(i.classList.contains('color_active') && i.parentElement.classList.contains('book__control_color')){
    return i;
  }
});

//Получеам индекс цвета фона элемента
let indexBgColor = colorArr.findIndex(i => {
  if(i.classList.contains('color_active') && i.parentElement.classList.contains('book__control_background')){
    return i;
  }
});

colorArr.forEach((item, i) => {
  item.onclick = () => {
    if(item.dataset.textColor) {
      colorArr[indexTextColor].classList.remove('color_active');
      item.classList.add('color_active');
      book.style.color = item.dataset.textColor;
      indexTextColor = i;
    }

    if(item.dataset.bgColor) {
      colorArr[indexBgColor].classList.remove('color_active');
      item.classList.add('color_active');
      book.style.background = item.dataset.bgColor;
      indexBgColor = i;
    }

    return false;
  }
  
});