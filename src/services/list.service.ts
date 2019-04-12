import { Injectable} from '@angular/core';
import { ToDo } from 'src/models/Todo';
import { Subject, BehaviorSubject } from 'rxjs';

const INIT_DATA: Array<ToDo> = [];

@Injectable()
export class ListService {


    public changeSource = new BehaviorSubject<any>(INIT_DATA);
    public change$ = this.changeSource.asObservable();

    clearItems():void {

        const data = this.changeSource.getValue();
        data.length = 0;
        
    }

    addItem(description: string):void {
       
        if  (description.trim() !== '') {
            
            const data = this.changeSource.getValue();

            const item:ToDo = {
                description: description,
                id: data.length,
                isMatched: true,
                isDone: false
            }
            data.push(item);
            this.changeSource.next(data);
        }

    }


    deleteItem(id: number) {
        const data = this.changeSource.getValue();
        data.filter((item, index) => {
            if(item.id === id) {
                data.splice(index, 1);
            }
        })
    }

}
