/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
var BarButton = (function () {
    function BarButton() {
    }
    BarButton.decorators = [
        { type: Component, args: [{
                    selector: 'progress-bar-button',
                    template: "\n    <button mat-button\n      [color]=\"options.buttonColor\" \n      [class.active]=\"options.active\"\n      [class.mat-raised-button]=\"options.raised\"\n      [disabled]=\"options.active\">\n\n        <span>{{ options.text }}</span>\n\n        <mat-progress-bar\n          *ngIf=\"options.active\"\n          [color]=\"options.barColor\"\n          class=\"bar\" \n          [mode]=\"options.mode\"\n          [value]=\"options.value\">\n        </mat-progress-bar>\n        \n    </button>\n  ",
                    styles: ["\n    button.active {cursor: not-allowed}\n    .bar {\n      position:absolute;\n      top:0px;\n      left: 0px;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    BarButton.ctorParameters = function () { return []; };
    BarButton.propDecorators = {
        "options": [{ type: Input },],
    };
    return BarButton;
}());
export { BarButton };
function BarButton_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BarButton.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BarButton.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BarButton.propDecorators;
    /** @type {?} */
    BarButton.prototype.options;
}
