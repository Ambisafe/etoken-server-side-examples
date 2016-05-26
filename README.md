# eToken Server Side Examples
## Installation

`npm install`

## Configuration

Specify private key of sender account in the `config.js`.

## Information

eToken is a smart contract, built using [Ethereum cryptocurrency network](https://ethereum.org/) and [Solidity programming language](https://solidity.readthedocs.io/en/latest/) by [Ambisafe](https://ambisafe.co/).

This repository provides an examples of integration with eToken smart contract for for Ruby and PHP.

The main problem with integrating Ethereum smart contract with anything that is not written in JavaScript
is that to execute any smart contract function you need web3 library, which was implemented only in javascript.

Unless your application is written in NodeJS you end up with necessity to run additional NodeJS micro service to interact with Ethereum.

For the sake of simplicity this examples use "cgi-bin" approach. It will work properly only when sending no more than 1 transaction per block. We recommend setting an artificial limit to 1 transaction per 70 seconds if you are not keeping track of Ethereum address nonce.

If you anticipate a higher volume of outgoing transactions - please research web3 and implement NodeJS micro service for sending transactions.

#### Useful Links

1. [eToken contract documentation](https://github.com/Ambisafe/etoken-docs/wiki/eToken-Standard-Token-API "eToken contract documentation")
2. [Transaction notifications service](https://github.com/Ambisafe/etoken-docs/wiki/Transaction-Notifications "Transaction notifications service")
