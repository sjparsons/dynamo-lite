import { DynamoLiteClient, PutItem } from "../dist";

const client = new DynamoLiteClient();

const params = {
  /** input parameters */
};
const command = new PutItem({
  Item: {
    AlbumTitle: {
      S: "Somewhat Famous",
    },
    Artist: {
      S: "No One You Know",
    },
    SongTitle: {
      S: "Call Me Today",
    },
  },
  TableName: "Music",
});

try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
