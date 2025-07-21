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
  selectedTask: Task | null = null;

  tasks: Task[] = tasks;

  incompleteTasks(): Task[] {
    return this.tasks.filter((task) => task.status === 'incompleted');
  }

  completeTasks(): Task[] {
    return this.tasks.filter((task) => task.status === 'completed');
  }

  showModal(task?: Task) {
    this.selectedTask = task || null;
    this.show = true;
  }

  hideModal() {
    this.show = false;
  }

  submitForm(formData: any) {
    if (this.selectedTask) {
      this.tasks = this.tasks.map(task =>
        task._id === this.selectedTask!._id ? { ...task, ...formData } : task
      );
    } else {
      const newTask: Task = {
        _id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        date: formData.date,
        status: 'incompleted',
      };
      this.tasks = [...this.tasks, newTask];
    }
    this.hideModal();
    this.selectedTask = null;
  }

  markTaskAsComplete(task: Task) {
    const updated = this.tasks.map(t =>
      t._id === task._id ? { ...t, status: 'completed' as 'completed' } : t
    );
    this.tasks = updated;
  }
}
