const modalMain = document.getElementById('modal_main');
const modalClose = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

modalClose.forEach(item => {
  item.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
  }
});

showSuccess.onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
}


