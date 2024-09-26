# Wave 8


・Reindexer library updates.

The Indexer for the Xenea chain is created using the Indexer creation tool ‘rindexer’.

However, because the ‘reindexer’ is still a library in the process of being created, it was not possible to Index multiple types of contracts with overlapping Events.

We are in contact with the ‘reindexer’ developers to fix this part.

The exchange is done via DM, so it cannot be made public, but some pullreques are being merged.

https://github.com/joshstevens19/rindexer/pull/87



・Use of ‘Ponder’.

https://github.com/cardene777/Xenea-Indexer-Template/tree/develop/ponder

Use of an Indexer creation tool called ‘Ponder’.

This is the tool to which the ‘rindexer’ library refers.



・Comparison of multiple Indexers

Multiple Indexers will be used to compare prices and ease of use.

It is possible to use The Graph, for example, but Node management and query costs are higher and users pay more.

Also, in some Dapps, developers may set up their own Indexer nodes.

We will therefore select a tool that is cheaper and easier for developers to use using Multiple Indexer.
