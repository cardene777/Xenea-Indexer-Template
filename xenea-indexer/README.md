# Railway

## Local

```bash
cd indexer
```

```bash
rindexer start all
```

## Redeploy

1. Configure environment variables

  ```bash
  railway open
  ```

6. Create a domain to access GraphQL Playground

  ```bash
  railway domain
  ```

7. Redeploy the service

  ```bash
  railway up
  ```



```
DATABASE_URL
postgresql://postgres:cCzfKpsbzVWnxaCgolBJWPXARdRdyQxN@postgres.railway.internal:5432/railway?sslmode=disable
PORT
3001
