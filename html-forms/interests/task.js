const checkbox = document.querySelectorAll('input[type="checkbox"]'); //находим все чекбоксы

checkbox.forEach(elem => {
  elem.addEventListener('click', () => {
    //при клике на один из чекбоксов находим ближайший дочерний тег ul
    const childUl = elem.closest('li').querySelector('ul');

    //если такой ul существует, то
    if(childUl) {
      //находим чекбоксы внутри ul
      const childCheckbox = childUl.querySelectorAll('input[type="checkbox"]');
      childCheckbox.forEach(el => {
        el.checked = elem.checked; //присваиваем каждому чекбоксу то же значение, что и у родителя 
      });
    }
    //вызываем функцию checkParent с активным чекбоксом
    checkParent(elem);
  });
});

function checkParent(item) {
  //находим у активного чекбокса ближайший ul
  const parent = item.closest('ul.interests');
  
  //если такого ul не существует, то выходим
  if(!parent) return;

  //находим все чекбоксы этого ul
  const inputList = parent.querySelectorAll('input[type="checkbox"]');
  const inputArray = Array.from(inputList); //преобразуем в массив 
  const parentInput = parent.closest('li').querySelector('input[type="checkbox"]'); //находим чекбокс родителя

  //если отмечены все чекбоксы, то отмечаем родителя
  if(inputArray.every(el => el.checked)) {
    parentInput.indeterminate = false;
    parentInput.checked = true;
  }//если хотя бы один отмечен, то у родителя устанавливается значение indeterminate
  else if(inputArray.some(el => el.checked)) {
    parentInput.indeterminate = true;
  }//если не отмечено ни одного, то и у родителя ничего
  else if(inputArray.every(el => el.checked === false)) {
    parentInput.indeterminate = false;
    parentInput.checked = false;
  }

  //запуск рекурсии с родителем для проверки уровнев выше
  checkParent(parentInput)
}

