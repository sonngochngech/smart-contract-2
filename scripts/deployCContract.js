const {ethers} = require("hardhat");

require("dotenv").config();

async function main(){
    const [deployer] = await ethers.getSigners();
    const CFactory=await ethers.getContractFactory("CContract");
    const CToken=await CFactory.deploy(10000);
    console.log("Token address:", await CToken.getAddress());

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });