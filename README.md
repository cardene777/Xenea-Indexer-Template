# Xenea-Indexer-Template

![Screenshot 2024-08-02 at 4 39 26](https://github.com/user-attachments/assets/438f7cb2-d331-46d8-a3d8-cf4fdf13e9f7)

## Query

- [https://xenea-indexer-template-railway-production.up.railway.app/playground](https://xenea-indexer-template-railway-production.up.railway.app/playground)
- [https://xenea-indexer-template-railway-production.up.railway.app/graphql](https://xenea-indexer-template-railway-production.up.railway.app/graphql)

![Screenshot 2024-08-02 at 4 39 26](https://github.com/user-attachments/assets/aca09adb-a2ec-4b66-af4b-d9500db92db4)

1. Enter the following values in the red box in the top left-hand corner
  - https://xenea-indexer-template-railway-production.up.railway.app/graphql
2. Paste the following query
  ```graphql
  query AllTransfers($orderBy: [TransfersOrderBy!] = [BLOCK_NUMBER_DESC], $first: Int = 5) {
  allTransfers(orderBy: $orderBy, first: $first) {
    nodes {
      blockHash
      blockNumber
      contractAddress
      from
      network
      nodeId
      to
      txHash
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
  ```
3. Click on the AllTransfer button

## Tech

- reindexer
- Xenea
- Rust
- Docker
- Railway

## Reference

- https://rindexer.xyz/
