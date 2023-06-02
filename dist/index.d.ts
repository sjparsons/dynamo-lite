import { Command } from "./types/Command";
export declare class DynamoLiteClient {
    send<InputType, OutputType>(command: Command<InputType, OutputType>): Promise<OutputType>;
}
export { PutItem, PutItemCommandInput, PutItemCommandOutput } from "./PutItem";
export { CreateTable, CreateTableCommandInput, CreateTableCommandOutput, } from "./CreateTable";
