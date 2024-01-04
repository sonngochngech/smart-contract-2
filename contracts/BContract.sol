// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract BContract is ERC20,AccessControl {

    bytes32 public constant  BURN_MINT_ROLE=keccak256("BURN_MINT_PERMISSION");

    constructor(uint256 initialSupply) ERC20("BToken","BT") {
        _mint(msg.sender,initialSupply);
        _grantRole(DEFAULT_ADMIN_ROLE,msg.sender);
        _grantRole(BURN_MINT_ROLE,msg.sender);
    }

    function grantMintRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE){
        grantRole(BURN_MINT_ROLE,account);
    }
    function mint(address account,uint amount) external onlyRole(BURN_MINT_ROLE){
        _mint(account,amount);
    }
    function burn(address account,uint amount) external onlyRole(BURN_MINT_ROLE){
        _burn(account,amount);
    }

}
