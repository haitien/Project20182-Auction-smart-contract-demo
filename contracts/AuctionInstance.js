import web3 from './web3';

const ABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "highestPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetWinningPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "endTime",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "title",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetAllBidders",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetState",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Bid",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "description",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetNumberBidders",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "minIncrePrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "CancelOrFinish",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
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
		"name": "highestBidder",
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
		"name": "initPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetAuctionInfor",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "pendingWithDrawals",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
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
		"name": "bidders",
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
		"name": "biddingTime",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetRemainingTime",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetWinningBidder",
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
		"name": "State",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
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
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

// const ABI = [
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "highestPrice",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "GetWinningPrice",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "endTime",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "title",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "GetAllBidders",
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
// 		"inputs": [],
// 		"name": "GetState",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [],
// 		"name": "Bid",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"payable": true,
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "description",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "GetNumberBidders",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "minIncrePrice",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [],
// 		"name": "CancelOrFinish",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "owner",
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
// 		"constant": true,
// 		"inputs": [],
// 		"name": "highestBidder",
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
// 		"constant": true,
// 		"inputs": [],
// 		"name": "initPrice",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "GetAuctionInfor",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "uint256"
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
// 				"type": "address"
// 			}
// 		],
// 		"name": "pendingWithDrawals",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
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
// 		"name": "bidders",
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
// 		"constant": true,
// 		"inputs": [],
// 		"name": "biddingTime",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "GetRemainingTime",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "GetWinningBidder",
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
// 		"constant": true,
// 		"inputs": [],
// 		"name": "State",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint8"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"name": "_owner",
// 				"type": "address"
// 			},
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
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	}
// ];

export default address => {
  const instance = new web3.eth.Contract(ABI, address);
  return instance;
};
