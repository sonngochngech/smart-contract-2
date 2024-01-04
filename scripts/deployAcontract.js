
require("dotenv").config();

async function main(){
    const[deployer]=await ethers.getSigners();
    const AFactory=await ethers.getContractFactory("AContract");
    const A=await AFactory.deploy(process.env.BT_ADDRESS);
    console.log("Token address:", await A.getAddress());

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });