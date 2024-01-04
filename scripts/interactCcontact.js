require("dotenv").config();

async function getBalance(){
    const Atoken= await  ethers.getContractFactory("CContract");
    const contract=Atoken.attach(process.env.CT_ADDRESS);
    const query="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const result=await  contract.balanceOf(query);
    console.log(result);
}
async function mint(){
    const [deployer]=await ethers.getSigners();
    const Ctoken= await  ethers.getContractFactory("CContract");
    const contract=Ctoken.attach(process.env.CT_ADDRESS);
    const result=await  contract.mint(process.env.BT_ADDRESS,deployer.address,100);
    console.log(result);
}

getBalance()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });