// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CoffeePortal {
    uint256 totalCoffees;
    mapping (address => uint) coffeeByAddress;

    constructor() {
        console.log("wopwop, a contract here!");
    }

    function coffee() public {
        coffeeByAddress[msg.sender]++;
        totalCoffees += 1;
        console.log("%s has a coffee! %s waves by her/him", msg.sender, coffeeByAddress[msg.sender]);
    }

    function getTotalCoffees() public view returns (uint256) {
        console.log("We have %d total waves!", totalCoffees);
        return totalCoffees;
    }
}
