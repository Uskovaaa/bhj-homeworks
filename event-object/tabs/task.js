const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

const tabArray = Array.from(tab);
const tabContentArray = Array.from(tabContent);

let currentIndex = tabArray.findIndex(item => item.classList.contains('tab_active'));


for(let i = 0; i < tabArray.length; i++) {
  
  tabArray[i].addEventListener('click', ()=> {

    if(i !== currentIndex) {
      tabArray[i].classList.add('tab_active');
      tabContentArray[i].classList.add('tab__content_active');
      
      if(tabArray[currentIndex].classList.contains('tab_active')) {
        tabArray[currentIndex].classList.remove('tab_active');
        tabContentArray[currentIndex].classList.remove('tab__content_active');
      }

      currentIndex = i;
    }
  });
}

