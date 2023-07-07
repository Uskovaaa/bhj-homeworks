const tooltip = document.querySelector('.tooltip');
const hasTooltip = document.querySelectorAll('.has-tooltip');
let index = null;
tooltip.dataset.position = 'bottom';

hasTooltip.forEach((e, i) => {
  
  e.onclick = () => {
    if(tooltip.dataset.position) {
      if(tooltip.dataset.position == 'top') {
        tooltip.style.top = e.getBoundingClientRect().top - 1.5 * e.getBoundingClientRect().height + 'px';
      }
      if(tooltip.dataset.position == 'right') {
        tooltip.style.top = e.getBoundingClientRect().top + 'px';
        tooltip.style.left = e.getBoundingClientRect().right + 'px';
      }
      if(tooltip.dataset.position == 'bottom') {
        tooltip.style.top = e.getBoundingClientRect().bottom + 'px';
        tooltip.style.left = e.getBoundingClientRect().left + 'px';
      }
    }
    
    if(index !== i) {
      tooltip.classList.add('tooltip_active');
      tooltip.innerHTML = e.title;
    }

    if(index === i) {
      tooltip.classList.toggle('tooltip_active');
    }

    index = i;

    return false;
      
  }

  
  
});




