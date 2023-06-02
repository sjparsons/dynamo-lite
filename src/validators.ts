import { InvalidTableNameException } from "./exceptions";

const VALID_TABLE_NAME = /^[a-zA-Z0-9_.-]{3,255}$/;

/**
 * Ensures that the the given `tableName` matches the following regex:
 *
 * ```
 * [a-zA-Z0-9_.-]{3,255}
 * ```
 * @throws InvalidTableNameException
 */
export function validateTableName(tableName: string): string {
  if (typeof tableName !== "string" || !VALID_TABLE_NAME.exec(tableName)) {
    throw new InvalidTableNameException();
  }
  return tableName;
}
