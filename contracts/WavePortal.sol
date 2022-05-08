// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    mapping (address => uint) wavesByAddress;

    constructor() {
        console.log("wopwop, a contract here!");
    }

    function wave() public {
        wavesByAddress[msg.sender]++;
        totalWaves += 1;
        console.log("%s has waved! %s waves by her/him", msg.sender, wavesByAddress[msg.sender]);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}