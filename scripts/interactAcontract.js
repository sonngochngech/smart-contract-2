require("dotenv").config();

async function main(){
    const [deployer] = await ethers.getSigners();
    const Atoken= await  ethers.getContractFactory("AContract");
    const contract=Atoken.attach(process.env.AT_ADDRESS);
    const result=await contract.mint(1000);
    console.log(result);
}

async function lock(amount){
    const [deployer] = await ethers.getSigners();
    const Atoken= await  ethers.getContractFactory("AContract");
    const contract=Atoken.attach(process.env.AT_ADDRESS);
    const result=await contract.lock(amount);
    console.log(result);
}

async function withdraw(amount){
    const [deployer] = await ethers.getSigners();
    const Atoken= await  ethers.getContractFactory("AContract");
    const contract=Atoken.attach(process.env.AT_ADDRESS);
    const result=await contract.withdraw(amount);
    console.log(result);
}
async function burn(amount){
    const [deployer] = await ethers.getSigners();
    const Atoken= await  ethers.getContractFactory("AContract");
    const contract=Atoken.attach(process.env.AT_ADDRESS);
    const result=await contract.burn(amount);
    console.log(result);
}
burn(100)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });