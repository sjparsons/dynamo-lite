"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTableNameException = void 0;
/**
 * The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be ACTIVE.
 */
class InvalidTableNameException extends Error {
    constructor() {
        super(...arguments);
        this.name = "InvalidTableNameException";
    }
}
exports.InvalidTableNameException = InvalidTableNameException;
