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
      if(this.tasksInput.value.length == 0) {
        return false;
      }
      this.getTasks();
      event.preventDefault();
    });
  }

  getTasks() {
    const inputTask = this.tasksInput.value.trim();

    this.displayTasks(inputTask);
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

    const taskRemove = tasks.querySelectorAll('.task__remove');
    
    this.removeTasks(taskRemove);
  }

  removeTasks(taskRemove) {
    taskRemove.forEach(el => {
      el.onclick = () => {
        const task = el.closest('.task');
        task.remove();
        return false;
      }
    });
  }
  
}

new Tasks(document.querySelector('.tasks'));