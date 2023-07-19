const xhr = new XMLHttpRequest(); //запрос на получение данных
const xhrPost = new XMLHttpRequest(); //запрос на отправку данных
const poll = document.querySelector('.poll'); //div с классом poll

//навешиваем событие readystatechange на запрос получения данных
xhr.addEventListener('readystatechange', () => { 
  if(xhr.readyState === xhr.DONE) { //если запрос выполнен, то

    const xhrObject = JSON.parse(xhr.response); //формат JSON переводим в объект
    let title = xhrObject.data.title; //получаем заголовок
    let key; //создаём переменную, в которую будет записывать номер индекса

    //добавляем в HTML заголовок
    poll.querySelector('.poll__title').insertAdjacentHTML('afterBegin',  
    `
      ${title}
    `);

    //добавляем в HTML кнопки с вариантами ответа
    for(let i in xhrObject.data.answers) {
      poll.querySelector('.poll__answers').insertAdjacentHTML('beforeEnd',  
      `
        <button class="poll__answer">
          ${xhrObject.data.answers[i]}
        </button>    
      `);    
    }

    //навешиваем событие click на выбранную кнопку
    poll.querySelector('.poll__answers').addEventListener('click', event => {
      alert('Спасибо, Ваш голос засчитан!');
      
      //отправляем данные на сервер
      xhrPost.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
      xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhrPost.send(`vote=${xhrObject.id}&answer=${key}`); //передаём номер опроса и номер ответа

      //навешиваем событие readystatechange на запрос отправки и получения данных
      xhrPost.addEventListener('readystatechange', () => {
        if(xhrPost.readyState === xhrPost.DONE) {

          const xhrObjectPost = JSON.parse(xhrPost.response); //формат JSON переводим в объект

          //удаляем кнопки
          poll.querySelectorAll('.poll__answer').forEach(e => e.remove());
          
          //переменная для суммирования значений опроса
          let sum = 0;
          
          //плюсуем выбранный нами вариант ответа к числу проголосовавших за этот вариант
          xhrObjectPost.stat[key].votes++;
          //считаем сумму всех голосов 
          xhrObjectPost.stat.forEach(elem => sum += elem.votes)
          //создаём массив всех голосов по отдельности в процентах
          const arrVotesPercent = xhrObjectPost.stat.map(e => +(e.votes / sum * 100).toFixed(2));

          //добавляем значения и количество голосов в процентах
          arrVotesPercent.forEach((e, ind) => {
            poll.querySelector('.poll__answers').insertAdjacentHTML('beforeend',
            `
              <div class="poll__answer">
                ${xhrObjectPost.stat[ind].answer}:
                <span class="poll__answer" style="font-weight:bold">
                    ${e}%
                  </span>
              </div>
            `);
          });
        }

      });

      //находим нажатый вариант ответа и сравниваем его со всеми ответами, при совпадении запонимаем индекс для дальнейших операций
      xhrObject.data.answers.forEach((item, index) => {
        if(event.target.textContent.trim() === item) {
          return key = index;
        }
      });
    });
  }

});

//получаем данные с сервера
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
