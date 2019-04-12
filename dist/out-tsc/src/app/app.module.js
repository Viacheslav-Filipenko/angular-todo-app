import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { CommonModule } from '@angular/common';
import { TodoAlertComponent } from './components/alerts/todo-alert/todo-alert.component';
import { FilterComponent } from './components/todo/filter/filter.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                TodoItemComponent,
                TodoListComponent,
                TodoComponent,
                TodoAlertComponent,
                FilterComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                CommonModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map