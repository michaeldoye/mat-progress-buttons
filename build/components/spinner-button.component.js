/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
var SpinnerButton = (function () {
    function SpinnerButton() {
    }
    SpinnerButton.decorators = [
        { type: Component, args: [{
                    selector: 'spinner-button',
                    template: "\n    <button mat-button \n      [color]=\"options.buttonColor\"     \n      [class.active]=\"options.active\"\n      [class.mat-raised-button]=\"options.raised\"\n      [disabled]=\"options.active\">\n\n        <span>{{ options.text }}</span>\n\n        <mat-spinner class=\"spinner\" \n          [diameter]=\"options.spinnerSize\"\n          [color]=\"options.spinnerColor\" \n          [mode]=\"options.mode\"\n          [value]=\"options.value\"\n          *ngIf=\"options.active\">\n        </mat-spinner>\n\n    </button>\n  ",
                    styles: ["\n    button /deep/ .mat-button-wrapper {display:flex}\n    button.active {cursor: not-allowed}\n    .spinner {\n      margin-top: 8px;\n      margin-left: 5px;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    SpinnerButton.ctorParameters = function () { return []; };
    SpinnerButton.propDecorators = {
        "options": [{ type: Input },],
    };
    return SpinnerButton;
}());
export { SpinnerButton };
function SpinnerButton_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SpinnerButton.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SpinnerButton.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SpinnerButton.propDecorators;
    /** @type {?} */
    SpinnerButton.prototype.options;
}
