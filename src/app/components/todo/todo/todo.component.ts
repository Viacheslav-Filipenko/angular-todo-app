import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';

import { ToDo } from 'src/models/Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { ListService } from 'src/services/list.service';
import { FilterComponent } from '../filter/filter.component';
import { PromptService } from 'src/services/prompt.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ListService, PromptService]
})
export class TodoComponent implements OnInit {

  description: string = "";

  @ViewChild(FilterComponent) filterComp: FilterComponent;


  clearToDos() {
    this.listService.clearItems();
  }

  addToDo() {


    if (this.description) {
      this.listService.addItem(this.description);
      this.description = '';
    }
  }

  constructor(private listService: ListService) { }

  ngOnInit() {


  }

}
