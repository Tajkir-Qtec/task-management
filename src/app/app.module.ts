import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncompleteTaskComponent } from './incomplete-task/incomplete-task.component';

@NgModule({
  declarations: [
    AppComponent,
    IncompleteTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
