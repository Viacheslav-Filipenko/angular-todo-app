import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ListService } from 'src/services/list.service';
var TodoComponent = /** @class */ (function () {
    function TodoComponent(listService) {
        this.listService = listService;
        this.description = "";
    }
    TodoComponent.prototype.addToDo = function () {
        if (this.description) {
            this.listService.addItem({
                description: this.description,
                isDone: false
            });
            this.description = '';
        }
    };
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-todo',
            templateUrl: './todo.component.html',
            styleUrls: ['./todo.component.css'],
            providers: [ListService]
        }),
        tslib_1.__metadata("design:paramtypes", [ListService])
    ], TodoComponent);
    return TodoComponent;
}());
export { TodoComponent };
//# sourceMappingURL=todo.component.js.map