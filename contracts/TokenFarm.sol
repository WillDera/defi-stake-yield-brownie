// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenFarm is Ownable {
    // Stake -> stakeTokens
    // Unstake -> unStakeTokens
    // Issue rewards in tokens -> issueTokens
    // Allow adding more tokens to stake -> addAllowedTokens
    // get value of staked tokens -> getEthValue

    address[] public allowedTokens;

    function stakeTokens(uint256 _amount, address _token) public {
        // what tokens can be staked?
        // how much can be staked?

        require(_amount > 0, "Amount must be more than 0");
        require(tokenIsAllowed(_token), "Token is currently not allowed!");
    }

    function addAllowedTokens(address _token) public onlyOwner {
        allowedTokens.push(_token);
    }

    function tokenIsAllowed(address _token) public returns (bool) {
        for (
            uint256 allowedTokensIndex = 0;
            allowedTokensIndex < allowedTokens.length;
            allowedTokensIndex++
        ) {
            if (allowedTokens[allowedTokensIndex] == _token) {
                return true;
            }
        }
        return false;
    }
}
