class Tasks {
  constructor(tasks) {
    this.tasks = tasks;
    this.tasksInput = tasks.querySelector('.tasks__input');
    this.tasksBtn = tasks.querySelector('.tasks__add');
    this.tasksList = tasks.querySelector('.tasks__list');

    this.addEvent();
    
  }

  addEvent() {
    this.tasksBtn.addEventListener('click', () => {
      this.getTasks();
    });
  }

  getTasks() {
    const inputTask = this.tasksInput.value.trim();

    this.displayTasks(inputTask);
  }

  displayTasks(inputTask) {
    this.tasksList.innerHTML += `
      <div class="task">
        <div class="task__title">
          ${inputTask}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `;

    this.tasksInput.value = '';

    const taskRemove = tasks.querySelectorAll('.task__remove');
    this.removeTasks(taskRemove);
  }

  removeTasks(taskRemove) {
    const task = tasks.querySelectorAll('.task');
    const taskArr = Array.from(task);
    const taskRemoveArr = Array.from(taskRemove);
    
    taskRemoveArr.forEach((item, i) => {
      item.addEventListener('click', () => {
        taskArr[i].remove();
      });
    });
  }
  
}

new Tasks(document.querySelector('.tasks'));