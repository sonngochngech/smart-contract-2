require("dotenv").config();
async function main(){
    const [deployer]=await  ethers.getSigners();
    console.log(deployer.address);
    const Btoken= await  ethers.getContractFactory("BContract");
    const contract=Btoken.attach(process.env.BT_ADDRESS);
    const result=await contract.grantMintRole(process.env.AT_ADDRESS);
    console.log(result);
}
async function getBalance(){
    const Btoken= await  ethers.getContractFactory("BContract");
    const contract=Btoken.attach(process.env.BT_ADDRESS);
    const query="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const result=await  contract.balanceOf(query);
    console.log(result);
}
async function approve(amount){
    const Btoken= await  ethers.getContractFactory("BContract");
    const contract=Btoken.attach(process.env.BT_ADDRESS);
    const result=await  contract.approve(process.env.AT_ADDRESS,amount);
    console.log(result);

}
async function burn(amount){
    const Btoken= await  ethers.getContractFactory("BContract");
    const contract=Btoken.attach(process.env.BT_ADDRESS);
    const result=await  contract.totalSupply();
    console.log(result);

}

getBalance()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });