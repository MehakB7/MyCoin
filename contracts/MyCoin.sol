// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyContract is ERC20{
uint constant _initial_supply = 100 * (10**18);
    constructor() ERC20("MyCoin", "MYC"){
       _mint(msg.sender, _initial_supply);

    }

    function airdrop(address airAddress) public {
        transfer(airAddress, 10*(10**18)); 
    }
}

