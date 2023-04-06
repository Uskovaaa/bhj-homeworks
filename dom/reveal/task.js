const reveal = document.querySelectorAll('.reveal');
const revealArray = Array.from(reveal);



function isVisible(el) {
 for(let i in el) {
    
    const {top, bottom} = el[i].getBoundingClientRect();

    if(bottom < 0) {
      el[i].classList.remove('reveal_active');
    }
    else if(top > window.innerHeight) {
      el[i].classList.remove('reveal_active');
    }
    else {
      el[i].classList.add('reveal_active');
    }
    
  }

}


setInterval(() => {
  isVisible(revealArray);
}, 300);
