import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { CommonModule } from '@angular/common';
import { TodoAlertComponent } from './components/alerts/todo-alert/todo-alert.component';
import { FilterComponent } from './components/todo/filter/filter.component';
import { FilterPipe } from 'src/pipes/filter.pipe';
import { ListService } from 'src/services/list.service';
import { BackgroundComponent } from './components/alerts/background/background.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoComponent,
    TodoAlertComponent,
    FilterComponent,
    FilterPipe,
    BackgroundComponent
  ],
  entryComponents:[BackgroundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
