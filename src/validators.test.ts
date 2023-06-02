import { InvalidTableNameException } from "./exceptions";
import { validateTableName } from "./validators";

describe("validators", () => {
  describe("validateTableName", () => {
    test.each([
      "abc",
      "abcABC0123",
      "qwertyuiopasdfghjklzxcvbnm0123456789_.-",
      "a".repeat(255),
    ])("returns the name for valid table name %i", (tableName) => {
      expect(validateTableName(tableName)).toBe(tableName);
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
      expect(() => validateTableName(tableName as string)).toThrow(
        InvalidTableNameException
      );
    });
  });
});
