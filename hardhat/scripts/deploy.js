// const hre = require('hardhat')

(async () => {
  try {
    const Spacebear = await hre.ethers.getContractFactory("Spacebear");
    const spacebearInstance = await Spacebear.deploy();
    await spacebearInstance.deployed();

    console.log(`Deployed contract at ${spacebearInstance.address}`);
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
})();
