const tooltip = document.querySelector('.tooltip');
const hasTooltip = document.querySelectorAll('.has-tooltip');

tooltip.dataset.position = 'bottom';

hasTooltip.forEach(e => {
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
    
    tooltip.classList.toggle('tooltip_active');
    tooltip.innerHTML = e.title;
    return false;
  }
  
});




