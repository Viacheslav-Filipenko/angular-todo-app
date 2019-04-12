import { Component, OnInit } from '@angular/core';
import { PromptService } from 'src/services/prompt.service';

@Component({
  selector: 'app-todo-alert',
  templateUrl: './todo-alert.component.html',
  styleUrls: ['./todo-alert.component.css'],
})
export class TodoAlertComponent implements OnInit {

  question: string = '';

  reject(): void {
    this.promtService.ConfirmSourse.next(false);
  }

  confirm(): void {
    this.promtService.ConfirmSourse.next(true);
  }

  constructor(private promtService: PromptService) { }

  ngOnInit() {
  }

}
