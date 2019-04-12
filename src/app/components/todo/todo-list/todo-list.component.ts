import { Component, OnInit, Input, OnDestroy } from '@angular/core';


import { ToDo } from 'src/models/Todo';
import { ListService } from 'src/services/list.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnDestroy {

  @Input() question: string = '';

  public todos: Observable<Array<ToDo>>;

  public changeRef: Subscription = null;

  constructor(private listService: ListService) {}



  ngOnInit() {

    this.todos = this.listService.change$;
  }

  ngOnDestroy() {
  }

}
