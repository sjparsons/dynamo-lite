import { PutItem } from ".";

describe("PutItem", () => {
  it("sets given input on Command", () => {
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
    expect(command.resolveAsSQL()).toMatchInlineSnapshot(`
{
  "parameters": [
    "Music",
  ],
  "statement": "INSERT INTO ? () VALUES (Item)",
}
`);
  });
});
