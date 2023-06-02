/**
 * Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single Dynamo Lite table.
 */
export interface Tag {
  /**
   * The key of the tag. Tag keys are case sensitive. Each Dynamo Lite table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
   */
  Key: undefined | string;
  /**
   * The value of the tag. Tag values are case-sensitive and can be null.
   */
  Value: undefined | string;
}
