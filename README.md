Version
=======
> solidity-coverage: v0.8.2

Instrumenting for coverage...
=============================

> MyDutchNFT.sol
> MyERC20Token.sol
> NFTDutchAuction.sol
> NFTDutchAuctionProxy.sol

Compilation:
============

(node:83326) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Nothing to compile
No need to generate any newer typings.

Network Info
============
> HardhatEVM: v2.13.0
> network:    hardhat



  MyDutchNFT
    Deployment
      ✔ Should set the right name (138ms)
      ✔ Should set the right symbol
    Minting
      ✔ Mint NFTs and cross verify owner address of NFT ids (116ms)

  MyERC20Token
    Deployment
      ✔ Should set the right name (57ms)
      ✔ Should set the right symbol
    total supply
      ✔ Should mint the right supply

  NFTDutchAuction
    Deployment
      ✔ Should set the right owner (327ms)
      ✔ Should set the right erc20 token address
      ✔ Should set the right erc721 address
      ✔ Should set the right erc721 token ID
      ✔ Should set the right reserve price
      ✔ Should set the right number of block auction open
      ✔ Should set the right offer price decrement
      ✔ Should have address for nft token id 1 as same as owner's address
    Auction
      ✔ Is auction contract approved for transfering NFT
      ✔ Should not accept bid from owner
      ✔ Should reject bids after the auction has ended (48ms)
      ✔ Should reject bids after the no of blocks open count reached (70ms)
      ✔ Should reject a bid if price lesser and transfer back it to buyer (65ms)
      ✔ Should revert if called after initialization
      ✔ Should accept a valid bid and token transfered to buyer (53ms)

  NFTDutchAuctionProxy
    ✔ Should be owned by the deployer (237ms)
    ✔ Should not be able to be upgraded by non-owner
    ✔ Should revert if called after initialization


  24 passing (1s)

---------------------------|----------|----------|----------|----------|----------------|
File                       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------------------|----------|----------|----------|----------|----------------|
 contracts/                |      100 |    91.67 |     87.5 |      100 |                |
  MyDutchNFT.sol           |      100 |      100 |      100 |      100 |                |
  MyERC20Token.sol         |      100 |      100 |      100 |      100 |                |
  NFTDutchAuction.sol      |      100 |      100 |      100 |      100 |                |
  NFTDutchAuctionProxy.sol |      100 |       75 |    66.67 |      100 |                |
---------------------------|----------|----------|----------|----------|----------------|
All files                  |      100 |    91.67 |     87.5 |      100 |                |
---------------------------|----------|----------|----------|----------|----------------|
