const Spacebear = artifacts.require("MyToken");
const truffleAssert = require("truffle-assertions");

contract("Spacebear", (accounts) => {
  it("Should credit an NFT to a specific account", async () => {
    const spacebearInstance = await Spacebear.deployed();
    const txRes = await spacebearInstance.safeMint(
      accounts[1],
      "spacebear_1.json"
    );
    assert.equal(
      await spacebearInstance.ownerOf(0),
      accounts[1],
      "Owner of token 1 is not equal to account 2"
    );

    truffleAssert.eventEmitted(txRes, "Transfer", {
      from: "0x0000000000000000000000000000000000000000",
      to: accounts[0],
      tokenId: web3.utils.toBN("0"),
    });
  });
});
