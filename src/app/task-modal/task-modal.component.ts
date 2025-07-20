import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss'],
})
export class TaskModalComponent implements OnInit {
  @Input() hideModal: any;

  constructor() {}

  ngOnInit(): void {}
}
