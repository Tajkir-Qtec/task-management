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

  submitForm(formData: any) {
    // Logic to handle form submission
    console.log('Form submitted');
    console.log(formData);
    // You can add more logic here, such as validation or sending data to a service
    this.hideModal(); // Assuming hideModal is a method to close the modal
  }
}
