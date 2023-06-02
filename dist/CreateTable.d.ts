import { $Command } from "./$Command";
import { AttributeDefinition } from "./types/AttributeDefinition";
import { Command, SqlCommand } from "./types/Command";
import { GlobalSecondaryIndex } from "./types/GlobalSecondaryIndex";
import { KeySchemaElement } from "./types/KeySchemaElement";
import { LocalSecondaryIndex } from "./types/LocalSecondaryIndex";
import { ProvisionedThroughput } from "./types/ProvisionedThroughput";
import { SSESpecification } from "./types/SSESpecification";
import { Tag } from "./types/Tag";
import { StreamSpecification } from "./types/StreamSpecification";
export type CreateTableCommandInput = {
    /**
     * An array of attributes that describe the key schema for the table and indexes.
     */
    AttributeDefinitions: undefined | AttributeDefinition[];
    /**
     * Not implemented for Dynamo Lite.
     */
    BillingMode?: string;
    /**
     * Not implemented for Dynamo Lite.
     */
    DeletionProtectionEnabled?: boolean;
    /**
     * One or more global secondary indexes (the maximum is 20) to be created on the table. Each global secondary index in the array includes the following:
     *
     * - `IndexName` - The name of the global secondary index. Must be unique only for this table.
     * - `KeySchema` - Specifies the key schema for the global secondary index.
     * - `Projection` - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:
     *    - `ProjectionType` - One of the following:
     *       - `KEYS_ONLY` - Only the index and primary keys are projected into the index.
     *       - `INCLUDE` - Only the specified table attributes are projected into the index. The list of projected attributes is in NonKeyAttributes.
     *       - `ALL` - All of the table attributes are projected into the index.
     *    - `NonKeyAttributes` - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in `NonKeyAttributes`, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.
     * - `ProvisionedThroughput` - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units. Not applicable for Dynamo Lite
     */
    GlobalSecondaryIndexes?: GlobalSecondaryIndex[];
    /**
     * Specifies the attributes that make up the primary key for a table or an index. The attributes in `KeySchema` must also be defined in the `AttributeDefinitions` array. For more information, see [Data Model](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html) in the Amazon DynamoDB Developer Guide.
     *
     * Each `KeySchemaElement` in the array is composed of:
     *
     * - `AttributeName` - The name of this key attribute.
     * - `KeyType` - The role that the key attribute will assume:
     *   - `HASH` - partition key
     *   - `RANGE` - sort key
     *
     * The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from the DynamoDB usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
     *
     * The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
     *
     * For a simple primary key (partition key), you must provide exactly one element with a `KeyType` of `HASH`.
     *
     * For a composite primary key (partition key and sort key), you must provide exactly two elements, in this order: The first element must have a `KeyType` of `HASH`, and the second element must have a `KeyType` of `RANGE`.
     *
     * For more information, see [Working with Tables](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#WorkingWithTables.primary.key) in the Amazon DynamoDB Developer Guide.
     */
    KeySchema: undefined | KeySchemaElement[];
    /**
     * One or more local secondary indexes (the maximum is 5) to be created on the table. Each index is scoped to a given partition key value. There is a 10 GB size limit per partition key value; otherwise, the size of a local secondary index is unconstrained.
     *
     * Each local secondary index in the array includes the following:
     *
     * - `IndexName` - The name of the local secondary index. Must be unique only for this table.
     * - `KeySchema` - Specifies the key schema for the local secondary index. The key schema must begin with the same partition key as the table.
     * - `Projection` - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:
     *    - `ProjectionType` - One of the following:
     *      - `KEYS_ONLY` - Only the index and primary keys are projected into the index.
     *      - `INCLUDE` - Only the specified table attributes are projected into the index. The list of projected attributes is in `NonKeyAttributes`.
     *      - `ALL` - All of the table attributes are projected into the index.
     *    - `NonKeyAttributes` - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in `NonKeyAttributes`, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.
     */
    LocalSecondaryIndexes?: LocalSecondaryIndex[];
    /** Not implemented for Dynamo Lite */
    ProvisionedThroughput?: ProvisionedThroughput;
    /** Not implemented for Dynamo Lite */
    SSESpecification?: SSESpecification;
    /** Not implemented for Dynamo Lite */
    StreamSpecification?: StreamSpecification;
    /** Not implemented for Dynamo Lite */
    TableClass?: "STANDARD" | "STANDARD_INFREQUENT_ACCESS";
    /**
     * The name of the table to create.
     */
    TableName: undefined | string;
    /**
     * A list of key-value pairs to label the table. For more information, see [Tagging for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html).
     */
    Tags?: Tag[];
};
export type CreateTableCommandOutput = {};
export declare class CreateTable extends $Command<CreateTableCommandInput> implements Command<CreateTableCommandInput, CreateTableCommandOutput> {
    constructor(input: CreateTableCommandInput);
    resolveAsSQL(): SqlCommand;
}
