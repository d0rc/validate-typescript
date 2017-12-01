"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
function toInt(input) {
    let value = NaN;
    //todo add extra checks for (additional chars)
    if (typeof input === 'string' || typeof input === 'number') {
        value = Number.parseInt(input);
    }
    if (Number.isNaN(value)) {
        throw new errors_1.ConversionError(input, toInt.name, 'could not be converted to an integer');
    }
    return value;
}
exports.toInt = toInt;
function toNumber(input) {
    let value = NaN;
    //todo add extra checks for (additional chars)
    if (typeof input === 'string' || typeof input === 'number')
        value = Number(input);
    if (Number.isNaN(value)) {
        throw new errors_1.ConversionError(input, toNumber.name, 'could not be converted to a number');
    }
    return value;
}
exports.toNumber = toNumber;
function toBoolean(input) {
    let value = undefined;
    if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        value = Boolean(input); // todo not valid
    }
    if (typeof value === 'undefined') {
        throw new errors_1.ConversionError(input, toBoolean.name, 'could not be converted to a boolean');
    }
    return value;
}
exports.toBoolean = toBoolean;
//# sourceMappingURL=conversions.js.map