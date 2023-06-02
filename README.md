# Dynamo Lite

> NOTE: This is a work in progress. Use at your own risk!

Dynamo Lite is a drop-in replacement for AWS DynamoDB Client SDK that stores
data locally. This library provides a mechanism similar to SQLite so
that folks can easily build locally without the overhead of running another service (e.g. [running DynamoDB locally](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SettingUp.html)). Because this library has parity with the AWS DynamoDB Client SDK, it is easy at any time to use DynamoDB instead.

Common use cases:

- Single-server apps
- CI pipelines
- Locally running services

## Installing

```
npm install dynamo-lite
yarn add dynamo-lite
pnpm add dynamo-lite
```

## Getting started

### Import

```javascript
// ES5 example
const { DynamoLiteClient, PutItem } = require("dynamo-lite");

// ES6+ example
import { DynamoLiteClient, PutItem } from "dynamo-lite";
```

### Usage

First create a client, that can be used with multiple commands, and then create commands and execute them.

```ts
// Just like with the AWS DynamoDB Client SDK, the client can be shared by different commands.
const client = new DynamoLiteClient();

const params = {
  /** input parameters */
};
const command = new PutItem(params);

try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

---

## Feature Parity

We are targeting parity with the [AWS DynamoDB Client SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/).

### Client

The following table summarizes which of the configuration options are supported when creating the client.

| Constructor Config Properties | Priority | Status |
| ----------------------------- | -------- | ------ |
| `credentials`                 |          | ⬜     |
| `customUserAgent`             |          | ⬜     |
| `defaultsMode`                |          | ⬜     |
| `disableHostPrefix`           |          | ⬜     |
| `endpoint`                    |          | ⬜     |
| `endpointCacheSize`           |          | ⬜     |
| `endpointDiscoveryEnabled`    |          | ⬜     |
| `endpointProvider`            |          | ⬜     |
| `logger`                      | 0        | ⬜     |
| `maxAttempts`                 |          | ⬜     |
| `region`                      |          | ⬜     |
| `requestHandler`              |          | ⬜     |
| `retryMode`                   |          | ⬜     |
| `retryStrategy`               |          | ⬜     |
| `signer`                      |          | ⬜     |
| `signingEscapePath`           |          | ⬜     |
| `signingRegion`               |          | ⬜     |
| `systemClockOffset`           |          | ⬜     |
| `useDualstackEndpoint`        |          | ⬜     |
| `useFipsEndpoint`             |          | ⬜     |

The following table summarizes which of the methods are supported on the client.

| Methods   | Priority | Status |
| --------- | -------- | ------ |
| `send`    | 0        | ⬜     |
| `destroy` | 1        | ⬜     |

The following table summarizes which of the properties are supported on the client.

| Properties        | Priority | Status |
| ----------------- | -------- | ------ |
| `config`          | 1        | ⬜     |
| `middlewareStack` |          | ⬜     |

✅ implemented / ⬜ still to implement / ❌ will not implement

### Commands

The following table summarizes which of the commands are currently supported.

| Method name                         | Priority | Status |
| ----------------------------------- | -------- | ------ |
| BatchExecuteStatement               | 1        | ⬜     |
| BatchGetItem                        | 1        | ⬜     |
| BatchWriteItem                      | 1        | ⬜     |
| CreateBackup                        |          | ⬜     |
| CreateGlobalTable                   | 1        | ⬜     |
| CreateTable                         | 0        | ⬜     |
| DeleteBackup                        |          | ⬜     |
| DeleteItem                          | 0        | ⬜     |
| DeleteTable                         | 1        | ⬜     |
| DescribeBackup                      |          | ⬜     |
| DescribeContinuousBackups           |          | ⬜     |
| DescribeContributorInsights         |          | ⬜     |
| DescribeEndpoints                   |          | ⬜     |
| DescribeExport                      |          | ⬜     |
| DescribeGlobalTable                 |          | ⬜     |
| DescribeGlobalTableSettings         |          | ⬜     |
| DescribeImport                      |          | ⬜     |
| DescribeKinesisStreamingDestination |          | ❌     |
| DescribeLimits                      |          | ⬜     |
| DescribeTable                       |          | ⬜     |
| DescribeTableReplicaAutoScaling     |          | ⬜     |
| DescribeTimeToLive                  |          | ⬜     |
| DisableKinesisStreamingDestination  |          | ❌     |
| EnableKinesisStreamingDestination   |          | ❌     |
| ExecuteStatement                    | 1        | ⬜     |
| ExecuteTransaction                  |          | ⬜     |
| ExportTableToPointInTime            |          | ⬜     |
| GetItem                             | 0        | ⬜     |
| ImportTable                         |          | ⬜     |
| ListBackups                         |          | ⬜     |
| ListContributorInsights             |          | ⬜     |
| ListExports                         |          | ⬜     |
| ListGlobalTables                    | 2        | ⬜     |
| ListImports                         |          | ⬜     |
| ListTables                          | 2        | ⬜     |
| ListTagsOfResource                  |          | ⬜     |
| PutItem                             | 0        | ⬜     |
| Query                               | 0        | ⬜     |
| RestoreTableFromBackup              |          | ⬜     |
| RestoreTableToPointInTime           |          | ⬜     |
| Scan                                |          | ⬜     |
| TagResource                         |          | ⬜     |
| TransactGetItems                    |          | ⬜     |
| TransactWriteItems                  |          | ⬜     |
| UntagResource                       |          | ⬜     |
| UpdateContinuousBackups             |          | ⬜     |
| UpdateContributorInsights           |          | ⬜     |
| UpdateGlobalTable                   |          | ⬜     |
| UpdateGlobalTableSettings           |          | ⬜     |
| UpdateItem                          | 0        | ⬜     |
| UpdateTable                         |          | ⬜     |
| UpdateTableReplicaAutoScaling       |          | ⬜     |
| UpdateTimeToLive                    |          | ⬜     |

✅ implemented / ⬜ still to implement / ❌ will not implement

## Differences from AWS DynamoDB Client

- No support for callbacks
