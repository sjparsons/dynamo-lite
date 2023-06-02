export interface Command<InputType, OutputType> {
    /**
     * @internal
     */
    resolveAsSQL(): SqlCommand;
}
export type SqlCommand = {
    statement: string;
    parameters?: Array<string | number | boolean>;
};
