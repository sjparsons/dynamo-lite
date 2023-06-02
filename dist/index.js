"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = exports.PutItem = exports.DynamoLiteClient = void 0;
class DynamoLiteClient {
    send(command) {
        return __awaiter(this, void 0, void 0, function* () {
            return "something";
        });
    }
}
exports.DynamoLiteClient = DynamoLiteClient;
var PutItem_1 = require("./PutItem");
Object.defineProperty(exports, "PutItem", { enumerable: true, get: function () { return PutItem_1.PutItem; } });
var CreateTable_1 = require("./CreateTable");
Object.defineProperty(exports, "CreateTable", { enumerable: true, get: function () { return CreateTable_1.CreateTable; } });
