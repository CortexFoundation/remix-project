'use strict'

const infer_0418 = `// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.4.18;

/**
 * @title Infer_0418
 */
contract AIContract {
    uint256[] input_data;
    uint256[] infer_output = new uint256[](uint256((1 * 10 + 31) >> 5));
    
    constructor() public {
        input_data = new uint256[]((1 * 3 * 32 * 32 + 31) >> 5);
    }
    
    function Infer(address model, address input) public returns (uint256) {
      // feed data in input to model and store the output in infer_output
      infer(model, input, infer_output);
      return infer_output[0];
    }
    
    function InferArray(address model) public returns (uint256) {
      // feed data in input_data to model and store the output in infer_output
      inferArray(model, input_data, infer_output);
      return infer_output[0];
    }
}`

const infer_0870 = `// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Infer_0870
 */
contract AIContract {
    uint256[] input_data;
    uint256[] infer_output = new uint256[](uint256((1 * 10 + 31) >> 5));
    
    constructor() {
        input_data = new uint256[]((1 * 3 * 32 * 32 + 31) >> 5);
    }
    
    function Infer(address model, address input) public view returns (uint256) {
      // feed data in input to model and store the output in infer_output
      infer(model, input, infer_output);
      return infer_output[0];
    }

    function InferArray(address model) public view returns (uint256) {
      // feed data in input_data to model and store the output in infer_output
      inferArray(model, input_data, infer_output);
      return infer_output[0];
    }
}`

const readme = `REMIX EXAMPLE PROJECT

Remix example project is present when Remix loads very first time or there are no files existing in the File Explorer. 
It contains 1 directories:

1. 'contracts': Holds Infer contracts with different compiler version, denoted with number prefix in file name.
`

module.exports = {
    infer1: { name: 'contracts/1_Infer_0418.sol', content: infer_0418 },
    infer2: { name: 'contracts/2_Infer_0870.sol', content: infer_0870 },
    readme: { name: 'README.txt', content: readme }
}