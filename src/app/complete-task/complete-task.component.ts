import { Component, Input, OnInit } from '@angular/core';
import Task from 'src/model/task.model';

@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.scss']
})
export class CompleteTaskComponent implements OnInit {

  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
