export declare class $Command<InputType> {
    readonly input: InputType;
    /**
     * Unsupported in Dynamo Lite
     */
    middlewareStack: void;
    constructor(input: InputType);
    /**
     * Unsupported in Dynamo Lite.
     */
    static getEndpointParameterInstructions(): void;
}
