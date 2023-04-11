const reveal = document.querySelectorAll('.reveal');
const revealArray = Array.from(reveal);

function isVisible(el) {
 for(let i in el) {
    
    const { innerHeight } = window;
    const {top} = el[i].getBoundingClientRect();

    if(top < innerHeight && top > 0) {
      el[i].classList.add('reveal_active');
    }
    else {
      el[i].classList.remove('reveal_active');
    }
    
  }

}

setInterval(() => {
  isVisible(revealArray);
}, 300);
