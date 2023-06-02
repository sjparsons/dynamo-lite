/**
 * Represents the data for an attribute.
 *
 * Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.
 */
export type AttributeValue = BMember | BOOLMember | BSMember | LMember | MMember | NMember | NSMember | NULLMember | SMember | SSMember | $UnknownMember;
/**
 * An attribute of type Binary. For example:
 * ```
 * "B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"
 * ```
 */
export interface BMember {
    $unknown?: undefined;
    B: Uint8Array;
    BOOL?: undefined;
    BS?: undefined;
    L?: undefined;
    M?: undefined;
    N?: undefined;
    NS?: undefined;
    NULL?: undefined;
    S?: undefined;
    SS?: undefined;
}
/**
 * An attribute of type Boolean. For example:
 *
 * ```
 * "BOOL": true
 * ```
 */
export interface BOOLMember {
    $unknown?: undefined;
    B?: undefined;
    BOOL: boolean;
    BS?: undefined;
    L?: undefined;
    M?: undefined;
    N?: undefined;
    NS?: undefined;
    NULL?: undefined;
    S?: undefined;
    SS?: undefined;
}
/**
 * An attribute of type Binary Set. For example:
 *
 * ```
 * "BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]
 * ```
 */
export interface BSMember {
    $unknown?: undefined;
    B?: undefined;
    BOOL?: undefined;
    BS: Uint8Array[];
    L?: undefined;
    M?: undefined;
    N?: undefined;
    NS?: undefined;
    NULL?: undefined;
    S?: undefined;
    SS?: undefined;
}
/**
 * An attribute of type List. For example:
 *
 * ```
 * "L": [ {"S": "Cookies"} , {"S": "Coffee"}, {"N": "3.14159"}]
 * ```
 */
export interface LMember {
    $unknown?: undefined;
    B?: undefined;
    BOOL?: undefined;
    BS?: undefined;
    L: AttributeValue[];
    M?: undefined;
    N?: undefined;
    NS?: undefined;
    NULL?: undefined;
    S?: undefined;
    SS?: undefined;
}
/**
 * An attribute of type Map. For example:
 *
 * ```
 * "M": {"Name": {"S": "Joe"}, "Age": {"N": "35"}}
 * ```
 */
export interface MMember {
    $unknown?: undefined;
    B?: undefined;
    BOOL?: undefined;
    BS?: undefined;
    L?: undefined;
    M: Record<string, AttributeValue>;
    N?: undefined;
    NS?: undefined;
    NULL?: undefined;
    S?: undefined;
    SS?: undefined;
}
/**
 * An attribute of type Number. For example:
 *
 * ```
 * "N": "123.45"
 * ```
 * Numbers are sent to Dynamo Lite as strings, to maximize
 * compatibility across languages and libraries. However, Dynamo Lite treats them
 * as number type attributes for mathematical operations.
 */
export interface NMember {
    $unknown?: undefined;
    B?: undefined;
    BOOL?: undefined;
    BS?: undefined;
    L?: undefined;
    M?: undefined;
    N: string;
    NS?: undefined;
    NULL?: undefined;
    S?: undefined;
    SS?: undefined;
}
/**
 * An attribute of type Number Set. For example:
 *
 * ```
 * "NS": ["42.2", "-19", "7.5", "3.14"]
 * ```
 * Numbers are sent to Dynamo Lite as strings, to maximize
 * compatibility across languages and libraries. However, Dynamo Lite treats them
 * as number type attributes for mathematical operations.
 */
export interface NSMember {
    $unknown?: undefined;
    B?: undefined;
    BOOL?: undefined;
    BS?: undefined;
    L?: undefined;
    M?: undefined;
    N?: undefined;
    NS: string[];
    NULL?: undefined;
    S?: undefined;
    SS?: undefined;
}
/**
 * An attribute of type Null. For example:
 *
 * ```
 * "NULL": true
 * ```
 */
export interface NULLMember {
    $unknown?: undefined;
    B?: undefined;
    BOOL?: undefined;
    BS?: undefined;
    L?: undefined;
    M?: undefined;
    N?: undefined;
    NS?: undefined;
    NULL: boolean;
    S?: undefined;
    SS?: undefined;
}
/**
 * An attribute of type String. For example:
 *
 * ```
 * "S": "Hello"
 * ```
 */
export interface SMember {
    $unknown?: undefined;
    B?: undefined;
    BOOL?: undefined;
    BS?: undefined;
    L?: undefined;
    M?: undefined;
    N?: undefined;
    NS?: undefined;
    NULL?: undefined;
    S: string;
    SS?: undefined;
}
/**
 * An attribute of type String Set. For example:
 *
 * ```
 * "SS": ["Giraffe", "Hippo" ,"Zebra"]
 * ```
 */
export interface SSMember {
    $unknown?: undefined;
    B?: undefined;
    BOOL?: undefined;
    BS?: undefined;
    L?: undefined;
    M?: undefined;
    N?: undefined;
    NS?: undefined;
    NULL?: undefined;
    S?: undefined;
    SS: string[];
}
export interface $UnknownMember {
    $unknown?: [string, any];
    B?: undefined;
    BOOL?: undefined;
    BS?: undefined;
    L?: undefined;
    M?: undefined;
    N?: undefined;
    NS?: undefined;
    NULL?: undefined;
    S?: undefined;
    SS: string[];
}
