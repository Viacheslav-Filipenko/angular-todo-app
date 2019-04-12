import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ListService } from 'src/services/list.service';
var FilterComponent = /** @class */ (function () {
    function FilterComponent(listServise) {
        this.listServise = listServise;
        this.question = '';
    }
    FilterComponent.prototype.findItem = function () {
        this.listServise.findItem(this.question);
    };
    FilterComponent.prototype.ngOnInit = function () {
    };
    FilterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-filter',
            templateUrl: './filter.component.html',
            styleUrls: ['./filter.component.css'],
            providers: [ListService]
        }),
        tslib_1.__metadata("design:paramtypes", [ListService])
    ], FilterComponent);
    return FilterComponent;
}());
export { FilterComponent };
//# sourceMappingURL=filter.component.js.map