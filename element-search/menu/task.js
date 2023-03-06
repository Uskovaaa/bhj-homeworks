const menuLink = document.querySelectorAll('.menu__link');
const menuSub = document.querySelectorAll('.menu_sub');


menuLink.forEach(item => {
  item.onclick = () => {

    const parentMenuLink = item.closest('.menu__item');
    const childMenuLink = parentMenuLink.querySelector('.menu_sub');    

    if(childMenuLink) {
      if(!(childMenuLink.classList.contains('menu_active'))) closeMenu();
      childMenuLink.classList.toggle('menu_active');
      return false;
    }
  }

});

function closeMenu() {
  menuSub.forEach(item => {
    if(item.classList.contains('menu_active')) {
      item.classList.remove('menu_active');
    }
  })
}