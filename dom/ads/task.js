const rotatorCase = document.querySelectorAll('.rotator__case');
const rotatorCaseArray = Array.from(rotatorCase);

//Получение индекса активного элемента
let index = rotatorCaseArray.findIndex(item => {
  if(item.classList.contains('rotator__case_active')) {
    return item;
  }
});

addColor();

// Функция добавления текста из массива 
function addText() { 
  index++;
  rotatorCaseArray[index].classList.add('rotator__case_active');
}

// Удаление текста
function deleteText() {
  rotatorCaseArray[index].classList.remove('rotator__case_active');
}

// Проверка текста для организации бесконенчого добавления текста
function checkIndex() {
  if(rotatorCaseArray[index].nextElementSibling == null) {
    index = -1;
  }
  // if(index == rotatorCaseArray.length - 1) {
  //   index = -1;
  // }
}

// Изменение цвета текста
function addColor() {
  let color = rotatorCaseArray[index].dataset.color;
  rotatorCaseArray[index].style.color = color;
}

//Присвоение интервала, заданного у активного элемента
let delay = rotatorCaseArray[index].dataset.speed;
//Изменение текста согласно индивидуальному интервалу каждого элемента
let timerId = setTimeout(function changeInterval() {
  if(rotatorCaseArray[index].classList.contains('rotator__case_active')){
    deleteText();
    checkIndex();
    addText();
    addColor();
  }

  delay = rotatorCaseArray[index].dataset.speed;
  timerId = setTimeout(changeInterval, delay);

}, delay);
