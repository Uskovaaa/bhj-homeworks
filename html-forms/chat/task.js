const body = document.querySelector('body');
const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const chatInput = document.querySelector('.chat-widget__input');

//функция генерации фраз бота
function getPhrase() {
  const phrases = [
    'Где ваша совесть?',
    'Добрый день! До свидания!',
    'Кто тут?',
    'Мы ничего не будем вам продавать!',
    'Вы не купили ни одного товара для того, чтобы с нами так разговаривать!',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше'
  ],
  index = Math.floor(Math.random() * phrases.length);

  return phrases[index];
}

//текущая дата
const currentDate = new Date();
let hh = String(currentDate.getHours()).length < 2 ? 0 + String(currentDate.getHours()) : currentDate.getHours();
let mm = String(currentDate.getMinutes()).length < 2 ? 0 + String(currentDate.getMinutes()) : currentDate.getMinutes();

//добавление активности виджету при нажатии на него
chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

//вывод сообщений на виджет при нажатии клавиши Enter
body.addEventListener('keydown', (e) => {

  if(chatInput.value !== '' && e.code === 'Enter') {

    //автоскролл
    const chatContainer = messages.parentElement; 
    chatContainer.scrollTop = chatContainer.scrollHeight - chatContainer.clientHeight;   

    //сообщения пользователя
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${hh}:${mm}</div>
        <div class="message__text">
          ${chatInput.value}
        </div>
      </div>
    `;
    //сообщения бота
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${hh}:${mm}</div>
        <div class="message__text">
          ${getPhrase()}
        </div>
      </div>
    `;

    chatInput.value = '';
  }
});







  
