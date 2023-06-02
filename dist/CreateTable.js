"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
const _Command_1 = require("./$Command");
const validators_1 = require("./validators");
class CreateTable extends _Command_1.$Command {
    constructor(input) {
        super(input);
    }
    resolveAsSQL() {
        const tableName = (0, validators_1.validateTableName)(this.input.TableName);
        return {
            statement: "CREATE TABLE ? ()",
            parameters: [tableName],
        };
    }
}
exports.CreateTable = CreateTable;
