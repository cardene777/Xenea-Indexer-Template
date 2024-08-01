## Xenea Indexer Template

## About

This service provides a template to easily implement Indexer when creating an application in Xenea.
Indexer does not currently exist in Xenea.
The use of Indexer is mandatory for some applications that implement the following functions.
- Listing of NFTs held.
- Display of list of current NFT holders
- Acquisition of NFTs and Token sales and purchases.

This service therefore utilises the service Reindexer, which allows you to easily create an Indexer for EVM compatible blockchains, to create an Indexer template for Xenea.

## Motivation

An Indexer is always needed when trying to create complex applications.
However, it is expensive to Index all the data on the blockchain.
Therefore, the first step is to index only the contracts used in the application, with the goal of being able to easily build an Indexer for each application.
Also, it is usually expensive to utilise third-party Indexer services (e.g. The Graph).
Building your own Indexer should be cheaper than using an Indexer service, although you will still have to pay for hosting and other services.

## Specification

The following Reindexer service is used.
https://github.com/reindexer/reindexer

This service provides a template for building and deploying an Indexer for a simple-to-use contract on the Xenea blockchain.

## Future

We will later create an Indexer to Index events from all contracts.
In order to Indexer all contracts, we need to monitor the deployment of contracts on the blockchain and incorporate newly deployed contracts into Indexer's monitoring.
As an initial step, we also plan to manually incorporate only those contracts that have passed the application process into Indexer.
This will be implemented in stages.
