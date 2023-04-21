//функциональное программирование
// const chatWidget = document.querySelector('.chat-widget');
// const messages = document.querySelector( '.chat-widget__messages' );
// const chatInput = document.querySelector('.chat-widget__input');

// //функция генерации фраз бота
// function getPhrase() {
//   const phrases = [
//     'Где ваша совесть?',
//     'Добрый день! До свидания!',
//     'Кто тут?',
//     'Мы ничего не будем вам продавать!',
//     'Вы не купили ни одного товара для того, чтобы с нами так разговаривать!',
//     'К сожалению, все операторы сейчас заняты. Не пишите нам больше'
//   ],
//   index = Math.floor(Math.random() * phrases.length);

//   return phrases[index];
// }

// //текущая дата
// const currentDate = new Date();
// let hh = String(currentDate.getHours()).length < 2 ? 0 + String(currentDate.getHours()) : currentDate.getHours();
// let mm = String(currentDate.getMinutes()).length < 2 ? 0 + String(currentDate.getMinutes()) : currentDate.getMinutes();

// //добавление активности виджету при нажатии на него
// chatWidget.addEventListener('click', () => {
//   chatWidget.classList.add('chat-widget_active');
// });

// //вывод сообщений на виджет при нажатии клавиши Enter
// chatInput.addEventListener('keydown', (e) => {

//   if(chatInput.value !== '' && e.code === 'Enter') {

//     //автоскролл
//     const chatContainer = messages.parentElement; 
//     chatContainer.scrollTop = chatContainer.scrollHeight - chatContainer.clientHeight;   

//     //сообщения пользователя
//     messages.innerHTML += `
//       <div class="message message_client">
//         <div class="message__time">${hh}:${mm}</div>
//         <div class="message__text">
//           ${chatInput.value}
//         </div>
//       </div>
//     `;
//     //сообщения бота
//     messages.innerHTML += `
//       <div class="message">
//         <div class="message__time">${hh}:${mm}</div>
//         <div class="message__text">
//           ${getPhrase()}
//         </div>
//       </div>
//     `;

//     chatInput.value = '';
//   }
// });




//реализация с классами
class Chat {
  constructor(chatWidget) {
    this.chatWidget = chatWidget;
    this.chatInput = chatWidget.querySelector('.chat-widget__input');
    this.messages = chatWidget.querySelector('.chat-widget__messages');

    this.timerId = null;

    this.addEvent();
    this.waiting();
  }

  //метод событий клика и нажатия клавиши Enter
  addEvent() {
    this.chatWidget.addEventListener('click', () => {
      this.chatWidget.classList.add('chat-widget_active');
    });

    this.chatInput.addEventListener('keydown', (e) => {
      if(e.code === 'Enter') {
        this.validateMessage();
      }
    });
  }

  //получение фразы
  getPhrase() {
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

  //получение текущей даты 
  getDate() {
    const currentDate = new Date();
    let hh = String(currentDate.getHours()).length < 2 ? 0 + String(currentDate.getHours()) : currentDate.getHours();
    let mm = String(currentDate.getMinutes()).length < 2 ? 0 + String(currentDate.getMinutes()) : currentDate.getMinutes();

    return `${hh}:${mm}`;
  }

  //проверка введенного пользователем сообщения
  validateMessage() {
    const inputMessage = this.chatInput.value.trim(); //удаляет пробелы
    
    if(inputMessage !== '') {
      this.sendMessage('message_client', inputMessage);
      setTimeout(() => this.sendBotMessage(), 500);
    }
  }

  //вывод сообщения введенного пользователем 
  sendMessage(className, textMessage) {
    this.messages.innerHTML += `
      <div class="message ${className}">
        <div class="message__time">${this.getDate()}</div>
        <div class="message__text">
          ${textMessage}
        </div>
      </div>
    `;

    this.chatInput.value = '';
    
    this.autoscroll();

    clearInterval(this.timerId);

    //обнуление таймера при фокусе input
    this.chatInput.addEventListener('focus', () => {
      clearInterval(this.timerId);
    });

    //активация таймера при активном окне виджета
    if(this.chatWidget.classList.contains('chat-widget_active')) {
      this.waiting();
    }
  }

  //метод отправки сообщений ботом
  sendBotMessage() {
    this.sendMessage('', this.getPhrase());
  }

  //метод автоскролла
  autoscroll() {
    const chatContainer = this.messages.parentElement;
    chatContainer.scrollTop = chatContainer.scrollHeight - chatContainer.clientHeight;
  }

  //метод таймера на 30 секунд
  waiting() {
    this.timerId = setInterval(() => {
      this.sendBotMessage()
    }, 30000)
  }

}

  
new Chat(document.querySelector('.chat-widget'));