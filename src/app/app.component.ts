import { Component } from '@angular/core';
import { tasks } from 'src/assets/taskManagement.tasks';
import Task from 'src/model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task-management';
  show = false;

  tasks: Task[] = tasks;

  incompleteTasks(): Task[] {
    return this.tasks.filter((task) => task.status === 'incompleted');
  }

  completeTasks(): Task[] {
    return this.tasks.filter((task) => task.status === 'completed');
  }

  showModal() {
    this.show = true;
  }

  hideModal() {
    this.show = false;
  }
}
