const { Alchemy, Network } = require("alchemy-sdk");

const config = {
  apiKey: "PfmNH5O8CysuQ1stcbIknOXfYUE-1SNx",
  network: Network.MATIC_MUMBAI,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // Replace with the contract address of the ERC721 token you want to interact with
  const contractAddress = "0x123456789abcdef";

  // Replace with the token ID of the ERC721 token you want to retrieve
  const tokenId = 123;

  // Get owner of ERC721 token
  const owner = await alchemy.nft.getOwnersForNft(contractAddress, tokenId);
  console.log(owner);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
