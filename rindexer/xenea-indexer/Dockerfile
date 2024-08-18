# syntax = docker/dockerfile:1.6
# FROM ghcr.io/joshstevens19/rindexer:latest AS rindexer
FROM ghcr.io/joshstevens19/rindexer-bundled:sha-71496999f078a46b7bbffc4363a903ea9a3c3282 AS rindexer

ARG PROJECT_PATH="./indexer"

WORKDIR /usr/src/app

COPY ${PROJECT_PATH} /usr/src/app/rindexer-app

ARG PORT="3001"
ENV PORT=${PORT}

EXPOSE ${PORT}

ENTRYPOINT ["/app/rindexer"]
CMD ["start", "-p", "./rindexer-app", "all"]
