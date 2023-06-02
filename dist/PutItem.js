"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutItem = void 0;
const _Command_1 = require("./$Command");
const validators_1 = require("./validators");
class PutItem extends _Command_1.$Command {
    constructor(input) {
        super(input);
    }
    resolveAsSQL() {
        const tableName = (0, validators_1.validateTableName)(this.input.TableName);
        return {
            statement: "INSERT INTO ? () VALUES (Item)",
            parameters: [tableName],
        };
    }
}
exports.PutItem = PutItem;
