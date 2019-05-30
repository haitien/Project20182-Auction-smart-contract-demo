import web3 from './web3';

// const address = '0xee9f7efa2c958999a3b2cdd5b5bb4e0912040fc1';
const address = '0xd8d3106e4027bff4606aadb6f7e9e0a2dc123a52';

const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_biddingTime",
				"type": "uint256"
			},
			{
				"name": "_title",
				"type": "string"
			},
			{
				"name": "_initPrice",
				"type": "uint256"
			},
			{
				"name": "_minIncrePrice",
				"type": "uint256"
			},
			{
				"name": "_description",
				"type": "string"
			}
		],
		"name": "CreateAuction",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "auctions",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetAllAuctions",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

// const ABI = [
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "GetAllAuctions",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address[]"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "auctions",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_biddingTime",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "_title",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_initPrice",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "_minIncrePrice",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "_description",
// 				"type": "string"
// 			}
// 		],
// 		"name": "CreateAuction",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ];

const instance = new web3.eth.Contract(ABI, address);

export default instance;