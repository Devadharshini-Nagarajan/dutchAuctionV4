# Sample Hardhat Project

This project demonstrates a basic DutchAuction use case. It accepts hight bid of ERC20 token name Bid tokens, and transfer the NFT to bidder from owner and this version of dutchAuction is upgradable we can use proxy to upgrade this smart contracts.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

Version
=======
> solidity-coverage: v0.8.2

Instrumenting for coverage...
=============================

> bidToken.sol
> dutchNFT.sol
> Lock.sol
> NFTDutchAuction_ERC20bids.sol
> proxy_contract.sol

Compilation:
============

Generating typings for: 29 artifacts in dir: typechain-types for target: ethers-v5
Successfully generated 92 typings!
Compiled 29 Solidity files successfully

Network Info
============
> HardhatEVM: v2.13.0
> network:    hardhat



  Lock
    Deployment
      ✔ Should set the right unlockTime (73ms)
      ✔ Should set the right owner
      ✔ Should receive and store the funds to lock
      ✔ Should fail if the unlockTime is not in the future
    Withdrawals
      Validations
        ✔ Should revert with the right error if called too soon
        ✔ Should revert with the right error if called from another account
        ✔ Shouldn't fail if the unlockTime has arrived and the owner calls it
      Events
        ✔ Should emit an event on withdrawals
      Transfers
        ✔ Should transfer the funds to the owner

  NFTDutchAuction
    Deployment
      ✔ Should set the right owner (165ms)
      ✔ Should set the right erc721 address
      ✔ Should set the right erc721 token ID
      ✔ Should set the right reserve price
      ✔ Should set the right number of block auction open
      ✔ Should set the right offer price decrement
      ✔ check owner of token id 1
    Auction
      ✔ Is auction contract approved for transfering NFT
      ✔ Buyers will bid and bid will be reverted with not enough amount
      ✔ Buyer's bid will accepted and token transfered to buyer
      ✔ Buyers can not bid after auction ended
      ✔ Owner can not bid

  bidToken
    Deployment
      ✔ Should set the right name
      ✔ Should set the right symbol
    total supply
      ✔ Should mint the right supply

  dutchNFT
    Deployment
      ✔ Should set the right name
      ✔ Should set the right symbol
    Minting
      ✔ Mint NFTs


  27 passing (486ms)

--------------------------------|----------|----------|----------|----------|----------------|
File                            |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------------------------|----------|----------|----------|----------|----------------|
 contracts/                     |      100 |    73.08 |    91.67 |      100 |                |
  Lock.sol                      |      100 |      100 |      100 |      100 |                |
  NFTDutchAuction_ERC20bids.sol |      100 |       75 |      100 |      100 |                |
  bidToken.sol                  |      100 |      100 |      100 |      100 |                |
  dutchNFT.sol                  |      100 |      100 |      100 |      100 |                |
  proxy_contract.sol            |      100 |       25 |    66.67 |      100 |                |
--------------------------------|----------|----------|----------|----------|----------------|
All files                       |      100 |    73.08 |    91.67 |      100 |                |
--------------------------------|----------|----------|----------|----------|----------------|

