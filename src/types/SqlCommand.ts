export type SqlCommand = {
  statement: string;
  parameters?: Array<string | number | boolean>;
};
