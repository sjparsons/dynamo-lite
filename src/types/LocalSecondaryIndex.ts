import { KeySchemaElement } from "./KeySchemaElement";
import { Projection } from "./Projection";

/**
 * Represents the properties of a local secondary index.
 */
export interface LocalSecondaryIndex {
  /**
   * The name of the local secondary index. The name must be unique among all other indexes on this table.
   */
  IndexName: undefined | string;
  /**
   * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:
   *
   * - `HASH` - partition key
   * - `RANGE` - sort key
   *
   * The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
   *
   * The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
   */
  KeySchema: undefined | KeySchemaElement[];
  /**
   * Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   */
  Projection: undefined | Projection;
}
