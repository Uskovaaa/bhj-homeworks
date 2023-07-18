const xhr = new XMLHttpRequest();
const items = document.getElementById('items');

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    document.querySelector('.loader').classList.remove('loader_active');
    const xhrObject = JSON.parse(xhr.responseText);
    for(let i in xhrObject.response.Valute) {
      let charCode = xhrObject.response.Valute[i].CharCode;
      let value = xhrObject.response.Valute[i].Value;

      items.innerHTML += 
        `
        <div class ="item">
          <div class="item__code">
            ${charCode}
          </div>
          <div class="item__value">
            ${value}
          </div>
          <div class="item__currency">
            руб.
          </div>
        </div>
      `
    }
  }

});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.send();

