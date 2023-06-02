"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
const validators_1 = require("./validators");
describe("validators", () => {
    describe("validateTableName", () => {
        test.each([
            "abc",
            "abcABC0123",
            "qwertyuiopasdfghjklzxcvbnm0123456789_.-",
            "a".repeat(255),
        ])("returns the name for valid table name %i", (tableName) => {
            expect((0, validators_1.validateTableName)(tableName)).toBe(tableName);
        });
        test.each([
            undefined,
            1,
            "",
            "a",
            "ab",
            "a".repeat(256),
            "abc+",
            "abc=",
            "abc[",
            "abc]",
            "abc{",
            "abc}",
            null,
            [],
            {},
        ])("throws an error for invalid the table name %p", (tableName) => {
            expect(() => (0, validators_1.validateTableName)(tableName)).toThrow(exceptions_1.InvalidTableNameException);
        });
    });
});
