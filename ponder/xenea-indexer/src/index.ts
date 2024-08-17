import { ponder } from "@/generated";

// CDH
ponder.on("CDHContract:Transfer", async ({ event, context }) => {
  const { Account, Token, TransferEvent } = context.db;

  // Create an Account for the sender, or update the balance if it already exists.
  await Account.upsert({
    id: event.args.from,
  });

  // Create an Account for the recipient, or update the balance if it already exists.
  await Account.upsert({
    id: event.args.to,
  });

  // Create or update a Token.
  await Token.upsert({
    id: event.args.tokenId,
    create: {
      ownerId: event.args.to,
    },
    update: {
      ownerId: event.args.to,
    },
  });

  // Create a TransferEvent.
  await TransferEvent.create({
    id: event.log.id,
    data: {
      fromId: event.args.from,
      toId: event.args.to,
      tokenId: event.args.tokenId,
      timestamp: Number(event.block.timestamp),
    },
  });
});

// ERC721
ponder.on("SampleERC721:Transfer", async ({ event, context }) => {
  const { Account, Token, TransferEvent } = context.db;

  // Create an Account for the sender, or update the balance if it already exists.
  await Account.upsert({
    id: event.args.from,
  });

  // Create an Account for the recipient, or update the balance if it already exists.
  await Account.upsert({
    id: event.args.to,
  });

  // Create or update a Token.
  await Token.upsert({
    id: event.args.tokenId,
    create: {
      ownerId: event.args.to,
    },
    update: {
      ownerId: event.args.to,
    },
  });

  // Create a TransferEvent.
  await TransferEvent.create({
    id: event.log.id,
    data: {
      fromId: event.args.from,
      toId: event.args.to,
      tokenId: event.args.tokenId,
      timestamp: Number(event.block.timestamp),
    },
  });
});

// ERC1155
ponder.on("SampleERC1155:TransferSingle", async ({ event, context }) => {
  const { Account, Token, TransferEvent } = context.db;

  await Account.upsert({
    id: event.args.from,
  });

  await Account.upsert({
    id: event.args.to,
  });

  await Token.upsert({
    id: event.args.id,
    create: {
      ownerId: event.args.to,
    },
    update: {
      ownerId: event.args.to,
    },
  });

  await TransferEvent.create({
    id: event.log.id,
    data: {
      fromId: event.args.from,
      toId: event.args.to,
      tokenId: event.args.id,
      timestamp: Number(event.block.timestamp),
    },
  });
});
