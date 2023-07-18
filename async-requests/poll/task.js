const xhr = new XMLHttpRequest();
const xhrPost = new XMLHttpRequest();
const poll = document.querySelector('.poll');

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {

    const xhrObject = JSON.parse(xhr.response); 
    let title = xhrObject.data.title;
    let key;

    poll.querySelector('.poll__title').insertAdjacentHTML('afterBegin',  
    `
      ${title}
    `);

    for(let i in xhrObject.data.answers) {
      poll.querySelector('.poll__answers').insertAdjacentHTML('beforeEnd',  
      `
        <button class="poll__answer">
          ${xhrObject.data.answers[i]}
        </button>    
      `);    
    }

    poll.querySelector('.poll__answers').addEventListener('click', event => {
      alert('Спасибо, Ваш голос засчитан!');

      xhrPost.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
      xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhrPost.send(`vote=${xhrObject.id}&answer=${key}`);

      xhrPost.addEventListener('readystatechange', () => {
        if(xhrPost.readyState === xhrPost.DONE) {

          const xhrObjectPost = JSON.parse(xhrPost.response); 

          poll.querySelectorAll('.poll__answer').forEach(e => e.remove());

          for(let i in xhrObjectPost.stat) {
            poll.querySelector('.poll__answers').insertAdjacentHTML('beforeEnd',  
            `
              <div class="poll__answer">
                ${xhrObjectPost.stat[i].answer}:
                <span class="poll__votes">
                  ${xhrObjectPost.stat[i].votes}%
                </span>
              </div>
            `);    
          }
        }
      });

      xhrObject.data.answers.forEach((item, index) => {
        if(event.target.textContent.trim() === item) {
          return key = index;
        }
      });
    });
  }

});


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
