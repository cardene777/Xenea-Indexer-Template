# Railway

## Local

```bash
cd xenea-indexer/indexer
```

```bash
rindexer start all
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
