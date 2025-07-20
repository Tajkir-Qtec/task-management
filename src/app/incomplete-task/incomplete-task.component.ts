import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Task from 'src/model/task.model';

@Component({
  selector: 'app-incomplete-task',
  templateUrl: './incomplete-task.component.html',
  styleUrls: ['./incomplete-task.component.scss'],
})
export class IncompleteTaskComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  @Input() tasks: Task[] = [];
  @Output() editTask = new EventEmitter<Task>();
  handleEdit(task: Task) {
    this.editTask.emit(task);
  }
}
