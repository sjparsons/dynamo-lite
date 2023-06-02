"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTableName = void 0;
const exceptions_1 = require("./exceptions");
const VALID_TABLE_NAME = /^[a-zA-Z0-9_.-]{3,255}$/;
/**
 * Ensures that the the given `tableName` matches the following regex:
 *
 * ```
 * [a-zA-Z0-9_.-]{3,255}
 * ```
 * @throws InvalidTableNameException
 */
function validateTableName(tableName) {
    if (typeof tableName !== "string" || !VALID_TABLE_NAME.exec(tableName)) {
        throw new exceptions_1.InvalidTableNameException();
    }
    return tableName;
}
exports.validateTableName = validateTableName;
