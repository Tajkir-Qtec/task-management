import { Component, Input, OnInit, Output } from '@angular/core';
import Task from 'src/model/task.model';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss'],
})
export class TaskModalComponent implements OnInit {
  @Input() hideModal!: () => void;
  @Input() submitForm!: (data: Task) => void;
  @Input() selectedTask: Task | null = null;
  
  constructor() { }

  ngOnInit(): void { }
}
