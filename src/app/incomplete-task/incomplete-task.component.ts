import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Task from 'src/model/task.model';

@Component({
  selector: 'app-incomplete-task',
  templateUrl: './incomplete-task.component.html',
  styleUrls: ['./incomplete-task.component.scss'],
})
export class IncompleteTaskComponent implements OnInit {
  @Input() tasks: Task[] = [];
  @Output() editTask = new EventEmitter<Task>();
  @Output() taskCompleted = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void { }

  handleEdit(task: Task) {
    this.editTask.emit(task);
  }

  completeTask(task: Task) {
    this.taskCompleted.emit(task);
  }
}
