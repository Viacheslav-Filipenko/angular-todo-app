import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/services/list.service';
import { PromptService } from 'src/services/prompt.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers:[ListService, PromptService]
})
export class FilterComponent implements OnInit {

  isFound: boolean = true;

  question: string = '';

  constructor(private listServise: ListService) { }

  ngOnInit() {
  }

}
