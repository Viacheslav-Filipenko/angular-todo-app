import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var INIT_DATA = [];
var ListService = /** @class */ (function () {
    function ListService() {
        this.changeSource = new BehaviorSubject(INIT_DATA);
        this.change$ = this.changeSource.asObservable();
    }
    ListService.prototype.findItem = function (question) {
        if (question === '') {
            INIT_DATA.forEach(function (item) { return item.isMatched = false; });
        }
        INIT_DATA.filter(function (item) {
            if (item.description.search(question) === -1) {
                item.isMatched = true;
            }
        });
    };
    ListService.prototype.addItem = function (item) {
        if (item) {
            var data = this.changeSource.getValue();
            item.id = data.length;
            data.push(item);
            console.log(INIT_DATA);
        }
    };
    ListService.prototype.deleteItem = function (id) {
        var data = this.changeSource.getValue();
        data.splice(id);
        console.log(INIT_DATA);
    };
    ListService = tslib_1.__decorate([
        Injectable()
    ], ListService);
    return ListService;
}());
export { ListService };
//# sourceMappingURL=list.service.js.map