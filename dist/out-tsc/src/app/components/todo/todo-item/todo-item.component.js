import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/models/Todo';
import { ListService } from 'src/services/list.service';
var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(listService) {
        this.listService = listService;
        this.todoChange = new EventEmitter();
        this.isMatched = false;
        this.isEdit = false;
    }
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    TodoItemComponent.prototype.toogleEdit = function () {
        this.isEdit = !this.isEdit;
    };
    TodoItemComponent.prototype.editItem = function ($event) {
        if ($event.keyCode == 13 && this.todo.description !== '') {
            this.toogleEdit();
            this.todoChange.emit(this.todo);
        }
    };
    TodoItemComponent.prototype.deleteToDo = function () {
        if (this.todo.isDone) {
            this.listService.deleteItem(this.todo.id);
        }
        else {
        }
    };
    TodoItemComponent.prototype.toogleDone = function () {
        this.todo.isDone = !this.todo.isDone;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", ToDo)
    ], TodoItemComponent.prototype, "todo", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TodoItemComponent.prototype, "todoChange", void 0);
    TodoItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-todo-item',
            templateUrl: './todo-item.component.html',
            styleUrls: ['./todo-item.component.css'],
            providers: [ListService]
        }),
        tslib_1.__metadata("design:paramtypes", [ListService])
    ], TodoItemComponent);
    return TodoItemComponent;
}());
export { TodoItemComponent };
//# sourceMappingURL=todo-item.component.js.map