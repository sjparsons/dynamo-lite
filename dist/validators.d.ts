/**
 * Ensures that the the given `tableName` matches the following regex:
 *
 * ```
 * [a-zA-Z0-9_.-]{3,255}
 * ```
 * @throws InvalidTableNameException
 */
export declare function validateTableName(tableName: string): string;
