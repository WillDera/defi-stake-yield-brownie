// LPDX-License

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DappToken is ERC20 {
    constructor() public ERC20("Dapp Token", "DAPP") {
        // initial supply = 1m
        _mint(msg.sender, 1_000e0_21);
    }
}
