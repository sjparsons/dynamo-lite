import { Command } from "./types/Command";

export class DynamoLiteClient {
  async send<InputType, OutputType>(
    command: Command<InputType, OutputType>
  ): Promise<OutputType> {
    return "something" as OutputType;
  }
}

export { PutItem, PutItemCommandInput, PutItemCommandOutput } from "./PutItem";
export {
  CreateTable,
  CreateTableCommandInput,
  CreateTableCommandOutput,
} from "./CreateTable";
