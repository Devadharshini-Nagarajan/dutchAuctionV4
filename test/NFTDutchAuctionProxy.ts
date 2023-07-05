import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import {  loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("NFTDutchAuctionProxy", function () {
    async function deployMyDutchNFT() {
        const DutchNFT = await ethers.getContractFactory("MyDutchNFT");
        const dutch_nft = await DutchNFT.deploy();
        return { dutch_nft };
      }
    
      async function MyERC20Token() {
        const BidToken = await ethers.getContractFactory("MyERC20Token");
        const bid_token = await BidToken.deploy();
        return { bid_token };
      }

  async function deployNFTDutchAuctionProxy() {
    const [owner, account1, account2, account3, account4, account5] = await ethers.getSigners();
    const { dutch_nft } = await loadFixture(deployMyDutchNFT);
    const { bid_token } = await loadFixture(MyERC20Token);
    const nft_address = dutch_nft.address;
    const token_address = bid_token.address;
    await dutch_nft.connect(owner).safeMint(owner.address);
    await bid_token.connect(owner).transfer(account1.address,ethers.utils.parseEther("1000"))
    await bid_token.connect(owner).transfer(account2.address,ethers.utils.parseEther("1000"))
    await bid_token.connect(owner).transfer(account3.address,ethers.utils.parseEther("1000"))
    await bid_token.connect(owner).transfer(account4.address,ethers.utils.parseEther("1000"))
    await bid_token.connect(owner).transfer(account5.address,ethers.utils.parseEther("1000"))
    const nft_id = 1;
    const reservePrice = 30000;
    const numBlocksAuctionOpen = 100;
    const offerPriceDecrement = 10;

    const NFTDutchAuction = await ethers.getContractFactory("NFTDutchAuctionProxy");
    const basic_dutch_auction = await upgrades.deployProxy(NFTDutchAuction,[token_address,nft_address,nft_id,reservePrice, numBlocksAuctionOpen, offerPriceDecrement],{ kind : 'uups'});

    return { bid_token, token_address, dutch_nft, nft_address, nft_id, basic_dutch_auction, reservePrice, numBlocksAuctionOpen, offerPriceDecrement, owner, account1, account2, account3, account4 };
  }

  it("Should be owned by the deployer", async function () {
    const { basic_dutch_auction, owner } = await loadFixture(deployNFTDutchAuctionProxy);
    expect(await basic_dutch_auction.owner()).to.equal(owner.address);
  });

  it("Should not be able to be upgraded by non-owner", async function () {
    const { basic_dutch_auction, account1, account3 } = await loadFixture(deployNFTDutchAuctionProxy);
    await expect(basic_dutch_auction.connect(account1).upgradeTo(account3.address)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });

//   it("Should be able to be upgraded by owner", async function () {
//     const { basic_dutch_auction, owner, account3 } = await loadFixture(deployNFTDutchAuctionProxy);
//     await basic_dutch_auction.connect(owner).upgradeTo(account3.address);
//   });
});
