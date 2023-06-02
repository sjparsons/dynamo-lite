/**
 * The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be ACTIVE.
 */
export declare class InvalidTableNameException extends Error {
    readonly $fault: string;
    /**
     * TODO: could define this in the future.
     */
    $metadata: undefined;
    /**
     * TODO: could define in the future. typically a HttpResponse
     */
    $response?: undefined;
    /**
     * TODO: could define in the future. typically a trait
     */
    $retryable?: undefined;
    name: string;
}
