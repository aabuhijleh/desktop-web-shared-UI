"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AppNotification = function (props) {
    var buttonLabel = props.buttonLabel, onButtonClick = props.onButtonClick;
    return (react_1.default.createElement("div", { style: { border: "2px solid black", textAlign: "center" } },
        react_1.default.createElement("h3", null, "AppNotification"),
        react_1.default.createElement("button", { onClick: function () { return onButtonClick(buttonLabel + " is clicked"); } }, buttonLabel)));
};
exports.default = AppNotification;
//# sourceMappingURL=index.js.map