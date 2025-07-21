import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Task from 'src/model/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  @Input() task!: Task;
  @Output() onEdit = new EventEmitter<Task>();
  @Output() onComplete = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void { }

  editTask() {
    this.onEdit.emit(this.task);
  }

  handleCompleteTask() {
    this.onComplete.emit();
  }
}
