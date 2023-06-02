export class $Command<InputType> {
  readonly input: InputType;
  /**
   * Unsupported in Dynamo Lite
   */
  middlewareStack: void;

  constructor(input: InputType) {
    this.input = input;
  }

  /**
   * Unsupported in Dynamo Lite.
   */
  public static getEndpointParameterInstructions(): void {}
}
