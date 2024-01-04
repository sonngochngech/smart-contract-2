// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract CContract is ERC20, AccessControl {

    bytes32 public constant  BURN_MINT_ROLE = keccak256("BURN_MINT_PERMISSION");

    constructor(uint256 initialSupply) ERC20("CToken", "CT") {
        _mint(msg.sender, initialSupply);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(BURN_MINT_ROLE, msg.sender);
    }

    function grantMintRole(address _contractAddress, address _account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        (bool success,bytes memory data) = _contractAddress.delegatecall(abi.encodeWithSignature("grantMintRole(address)", _account));
        if (!success) {
            revert("Delegate call failed");
        }
    }

    function mint(address _contractAddress, address _account, uint _amount) external onlyRole(BURN_MINT_ROLE) {
        (bool success,bytes memory data) = _contractAddress.delegatecall(abi.encodeWithSignature("mint(address,uint256)", _account, _amount));
        if (!success) {
            revert("Delegate call failed");
        }
    }

    function burn(address _contractAddress, address _account, uint _amount) external onlyRole(BURN_MINT_ROLE) {

        (bool success,bytes memory data) = _contractAddress.delegatecall(abi.encodeWithSignature("burn(address,uint256)", _account, _amount));
        if (!success) {
            revert("Delegate call failed");
        }
    }

}
