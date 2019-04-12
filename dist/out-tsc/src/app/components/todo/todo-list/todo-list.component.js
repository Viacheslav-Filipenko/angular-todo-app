import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ListService } from 'src/services/list.service';
var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(listService) {
        this.listService = listService;
        this.changeRef = null;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.todos = this.listService.change$;
    };
    TodoListComponent.prototype.ngOnDestroy = function () {
    };
    TodoListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-todo-list',
            templateUrl: './todo-list.component.html',
            styleUrls: ['./todo-list.component.css'],
            providers: [ListService]
        }),
        tslib_1.__metadata("design:paramtypes", [ListService])
    ], TodoListComponent);
    return TodoListComponent;
}());
export { TodoListComponent };
//# sourceMappingURL=todo-list.component.js.map