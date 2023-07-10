class Tasks {
  constructor(tasks) {
    this.tasks = tasks;
    this.tasksInput = tasks.querySelector('.tasks__input');
    this.tasksBtn = tasks.querySelector('.tasks__add');
    this.tasksList = tasks.querySelector('.tasks__list');

    this.addEvent();
    
  }

  addEvent() {
    this.tasksBtn.addEventListener('click', event => {
      this.getTasks();
      event.preventDefault();
    });
  }

  getTasks() {
    const inputTask = this.tasksInput.value.trim();
    if( inputTask !== '') {
      this.displayTasks(inputTask);
    }
  }

  displayTasks(inputTask) {
    this.tasksList.insertAdjacentHTML('beforeEnd',      
    `<div class="task">
        <div class="task__title">
          ${inputTask}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `);

    this.tasksInput.value = '';
    
    this.removeTasks();
  }

  removeTasks() {
    this.tasks.addEventListener('click', e => {
      if(e.target.tagName != 'A') return;

      e.target.closest('.task').remove();
      return false;
    })
  }
  
}

new Tasks(document.querySelector('.tasks'));