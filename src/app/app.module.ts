import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncompleteTaskComponent } from './incomplete-task/incomplete-task.component';
import { CompleteTaskComponent } from './complete-task/complete-task.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IncompleteTaskComponent,
    CompleteTaskComponent,
    TaskCardComponent,
    TaskModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
