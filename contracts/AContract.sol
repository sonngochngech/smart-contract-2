// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


import "./BContract.sol";

contract AContract {


    BContract private  BContractInstance;


    constructor(address BTAddress){
        BContractInstance=BContract(BTAddress);
    }

    function setTokenAddress(address tokenAddress) public {
        BContractInstance=BContract(tokenAddress);
    }

    mapping(address=>uint) private lockAsset;


    function mint(uint amount) public {
        BContractInstance.mint(msg.sender,amount);
    }

    function lock(uint amount) public {
        require(BContractInstance.allowance(msg.sender,address(this))>=amount,"the allowance is not enough");
        BContractInstance.transferFrom(msg.sender,address(this),amount);
        lockAsset[msg.sender]+=amount;
    }

    function withdraw(uint amount) public{
        require(lockAsset[msg.sender]>=amount,"The lock asset is smaller than required amount");
        BContractInstance.transfer(msg.sender,amount);
        lockAsset[msg.sender]-=amount;
    }

    function burn(uint amount) public {
        require(BContractInstance.allowance(msg.sender,address(this))>=amount,"The amount is not enough");
        BContractInstance.burn(msg.sender,amount);

    }

}

