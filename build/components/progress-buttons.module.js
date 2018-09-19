/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, } from "@angular/material";
import { SpinnerButton } from "./spinner-button.component";
import { BarButton } from "./bar-button.component";
export { SpinnerButton } from "./spinner-button.component";
export { BarButton } from "./bar-button.component";
var MatProgressButtons = (function () {
    function MatProgressButtons() {
    }
    MatProgressButtons.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        MatButtonModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRippleModule
                    ],
                    declarations: [
                        SpinnerButton,
                        BarButton
                    ],
                    exports: [
                        SpinnerButton,
                        BarButton
                    ]
                },] },
    ];
    /** @nocollapse */
    MatProgressButtons.ctorParameters = function () { return []; };
    return MatProgressButtons;
}());
export { MatProgressButtons };
function MatProgressButtons_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MatProgressButtons.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MatProgressButtons.ctorParameters;
}
