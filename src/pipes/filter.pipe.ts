import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from 'src/models/Todo';


@Pipe({ name: 'filtertodo' })

export class FilterPipe implements PipeTransform {
   
    transform(todos: ToDo[], question: string) {

        if (question === '') {
            todos.forEach(item => item.isMatched = true);
            return todos;
        }

        todos.filter((item) => {

            if (item.description.search(question) !== -1) {
                item.isMatched = true;
            } else {
                item.isMatched = false;
            }

        });

        return todos;
    }
}