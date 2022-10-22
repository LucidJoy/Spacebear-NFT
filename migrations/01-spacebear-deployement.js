// loads mytoken.json from builds/contracts/MyToken.json
const Spacebear = artifacts.require("MyToken");

module.exports = function (deployer, network, accounts) {
  console.log(network, accounts);
  // deployer.deploy(Spacebear, arg1, arg2); constructor args
  deployer.deploy(Spacebear);
};
