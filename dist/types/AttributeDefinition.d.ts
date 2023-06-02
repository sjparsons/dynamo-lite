export interface AttributeDefinition {
    /**
     * A name for the attribute.
     */
    AttributeName: undefined | string;
    /**
     * The data type for the attribute, where:
     *
     * - `S` - the attribute is of type String
     * - `N` - the attribute is of type Number
     * - `B` - the attribute is of type Binary
     */
    AttributeType: undefined | "S" | "N" | "B";
}
