import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ToDo } from 'src/models/Todo';
import { ListService } from 'src/services/list.service';
import { PromptService } from 'src/services/prompt.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  providers: [ListService]
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ToDo;
  @Output() todoChange = new EventEmitter();

  isMatched:boolean = false;
  isEdit:boolean = false;

  constructor(private listService: ListService, private promptService: PromptService) { }

  ngOnInit():void {
  
  }

  toogleEdit() {
    this.isEdit = !this.isEdit;
  }

  editItem($event) {

    if ($event.keyCode == 13 && this.todo.description !== '') {
        this.toogleEdit();
        this.todoChange.emit(this.todo);
    }

  }

  deleteToDo() {
    if (this.todo.isDone) {
      this.listService.deleteItem(this.todo.id)
    } else {
      this.promptService.checkAnswer();

      this.promptService.confirm$.subscribe(data => {
        if (data) {
          this.listService.deleteItem(this.todo.id)
        }
      })
    }
  }

  toogleDone():void {
    this.todo.isDone = !this.todo.isDone;
  }

}
