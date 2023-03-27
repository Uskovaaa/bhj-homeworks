const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');

function openList(){
  dropdownList.classList.add('dropdown__list_active');
}

function closeList() {
  dropdownList.classList.remove('dropdown__list_active');
}

dropdownValue.addEventListener('click', openList);

dropdownItem.forEach(item => {
  item.onclick = () => {
    dropdownValue.textContent = item.textContent;
    closeList();
    return false;
  }
});