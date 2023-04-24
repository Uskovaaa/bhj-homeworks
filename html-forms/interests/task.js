const checkbox = document.querySelectorAll('input[type="checkbox"]');

checkbox.forEach(elem => {
  elem.addEventListener('click', function(event) {
    const target = event.target;
    const childUl = target.closest('li').querySelector('ul');

    if(childUl) {
      const childCheckbox = childUl.querySelectorAll('input[type="checkbox"]')
      childCheckbox.forEach(el => {
        el.checked = target.checked;
      });
    }
  });
});
