import { Component, OnInit } from '@angular/core';
import { tasks } from 'src/assets/taskManagement.tasks';

@Component({
  selector: 'app-incomplete-task',
  templateUrl: './incomplete-task.component.html',
  styleUrls: ['./incomplete-task.component.scss']
})
export class IncompleteTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tasks = tasks.filter(task => task.status === 'incompleted');
  markAsCompleted(task: any) {
    tasks.filter(t => t._id === task._id)[0].status = 'completed';
  }
}
