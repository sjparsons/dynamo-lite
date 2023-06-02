import { $Command } from "./$Command";
import { AttributeValue } from "./types/AttributeValue";
import { Command, SqlCommand } from "./types/Command";
export type PutItemCommandInput = {
    /**
     * A condition that must be satisfied in order for a conditional `PutItem` operation to succeed.
     *
     * An expression can contain any of the following:
     *
     * - Functions: `attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size`
     *   These function names are case-sensitive.
     * - Comparison operators: `= | <> | < | > | <= | >= | BETWEEN | IN`
     * - Logical operators: `AND | OR | NOT`
     *
     * For more information on condition expressions, see [Condition Expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html) in the Amazon DynamoDB Developer Guide.
     */
    ConditionExpression?: string;
    /**
     * This is deprecated parameter. Use ConditionExpression instead.
     */
    ConditionalOperator?: string;
    /**
     * This is deprecated parameter. Use ConditionExpression instead.
     */
    Expected?: undefined;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using `ExpressionAttributeNames`:
     *
     * - To access an attribute whose name conflicts with a DynamoDB reserved word.
     * - To create a placeholder for repeating occurrences of an attribute name in an expression.
     * - To prevent special characters in an attribute name from being misinterpreted in an expression.
     *
     * Use the `#` character in an expression to dereference an attribute name. For example, consider the following attribute name:
     *
     * ```
     * Percentile
     * ```
     *
     * The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see [Reserved Words](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html) in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for `ExpressionAttributeNames`:
     *
     * ```
     * {"#P":"Percentile"}
     * ```
     *
     * You could then use this substitution in an expression, as in this example:
     *
     * #P = :val
     *
     * Tokens that begin with the `:` character are expression attribute values, which are placeholders for the actual value at runtime.
     *
     * For more information on expression attribute names, see [Specifying Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: Record<string, string>;
    /**
     * One or more values that can be substituted in an expression.
     *
     * Use the `:` (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:
     *
     * ```
     * Available | Backordered | Discontinued
     * ```
     *
     * You would first need to specify ExpressionAttributeValues as follows:
     *
     * ```
     * { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }
     * ```
     *
     * You could then use these values in an expression, such as this:
     *
     * ```
     * ProductStatus IN (:avail, :back, :disc)
     * ```
     *
     * For more information on expression attribute values, see [Condition Expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html) in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeValues?: Record<string, AttributeValue>;
    /**
     * A map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item.
     *
     * You must provide all of the attributes for the primary key. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide both values for both the partition key and the sort key.
     *
     * If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.
     *
     * Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index.
     *
     * For more information about primary keys, see [Primary Key](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey) in the Amazon DynamoDB Developer Guide.
     *
     * Each element in the `Item` map is an `AttributeValue` object.
     */
    Item: undefined | Record<string, AttributeValue>;
    /**
     * With DynamoDB, this attribute determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response.
     * This is option has no effect with Dynamo Lite.
     */
    ReturnConsumedCapacity?: string;
    /**
     * Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections,
     * if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned.
     */
    ReturnItemCollectionMetrics?: string;
    /**
     * Use ReturnValues if you want to get the item attributes as they appeared before they were updated with the PutItem request.
     * For PutItem, the valid values are:
     *
     * - `NONE` - If ReturnValues is not specified, or if its value is NONE, then nothing is returned. (This setting is the default for ReturnValues.)
     * - `ALL_OLD` - If PutItem overwrote an attribute name-value pair, then the content of the old item is returned.
     *
     * The values returned are strongly consistent.
     *
     * The ReturnValues parameter is used by several operations; however, PutItem does not recognize any values other than NONE or ALL_OLD.
     */
    ReturnValues?: string;
    /**
     * The name of the table to contain the item.
     */
    TableName: undefined | string;
};
export type PutItemCommandOutput = {};
export declare class PutItem extends $Command<PutItemCommandInput> implements Command<PutItemCommandInput, PutItemCommandOutput> {
    constructor(input: PutItemCommandInput);
    resolveAsSQL(): SqlCommand;
}
