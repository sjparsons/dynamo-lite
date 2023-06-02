"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe("CreateItem", () => {
    it("sets given input on Command", () => {
        const command = new _1.CreateTable({
            AttributeDefinitions: [
                {
                    AttributeName: "AlbumTitle",
                    AttributeType: "S",
                },
                {
                    AttributeName: "Artist",
                    AttributeType: "S",
                },
                {
                    AttributeName: "SongTitle",
                    AttributeType: "S",
                },
            ],
            KeySchema: [
                {
                    AttributeName: "Artist",
                    KeyType: "HASH",
                },
                {
                    AttributeName: "AlbumTitle",
                    KeyType: "RANGE",
                },
            ],
            TableName: "Music",
        });
        expect(command.resolveAsSQL()).toMatchInlineSnapshot(`
{
  "parameters": [
    "Music",
  ],
  "statement": "CREATE TABLE ? ()",
}
`);
    });
});
