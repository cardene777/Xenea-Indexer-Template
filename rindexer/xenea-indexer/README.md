# Railway

## Local

```bash
cd xenea-indexer/indexer
```

```bash
rindexer start all
```

## Generate Graphql Codegen

```bash
rindexer codegen graphql --endpoint=http://localhost:3001/graphql
```

## Redeploy

```bash
cd xenea-indexer
```

1. Configure environment variables

  ```bash
  railway open
  ```

2. Create a domain to access GraphQL Playground

  ```bash
  railway domain
  ```

3. Redeploy the service

  ```bash
  railway up
  ```


## Playground

- [https://xenea-indexer-production.up.railway.app/playground](https://xenea-indexer-production.up.railway.app/playground)

## GraphQL

- [https://xenea-indexer-production.up.railway.app/graphql](https://xenea-indexer-production.up.railway.app/graphql)

## Queries

### SampleErc721Transfers

```graphql
query AllSampleErc721Transfers($first: Int) {
  allSampleErc721Transfers(first: $first) {
    nodes {
      blockHash
      blockNumber
      contractAddress
      from
      to
      tokenId
    }
  }
}
```
