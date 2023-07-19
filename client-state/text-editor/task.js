
  const editor = document.getElementById('editor');

  editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);   
  });
        
  editor.value = localStorage.getItem('text');

  document.querySelector('.card').insertAdjacentHTML('beforeend', 
    `
      <button class='btn'>
        Очистить содержимое
      </button>
    `);

  document.querySelector('.btn').addEventListener('click', () => {
    editor.value = '';
    localStorage.clear();
  });