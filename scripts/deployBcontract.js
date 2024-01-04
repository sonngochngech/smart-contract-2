const {ethers} = require("hardhat");

require("dotenv").config();

async function main(){
    const [deployer] = await ethers.getSigners();
    const BFactory=await ethers.getContractFactory("BContract");
    const BToken=await BFactory.deploy(10000);
    console.log("Token address:", await BToken.getAddress());

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });