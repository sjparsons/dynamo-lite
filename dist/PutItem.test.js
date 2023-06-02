"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe("PutItem", () => {
    it("sets given input on Command", () => {
        const command = new _1.PutItem({
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
