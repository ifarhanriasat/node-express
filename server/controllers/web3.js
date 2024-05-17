
const { Web3 } = require('web3');
const config = require('../config');


const contractABI = require('../../ABIs.json');

// URL of your blockchain node - i am using 3rd party node (infura)
const nodeUrl =  config.nodeUrl;

// Initialize a Web3 instance
const web3 = new Web3(nodeUrl);

// The address of the contract which we want to interact with - i am using an NFT contract which deployed on polygon mainnet
const contractAddress = config.contractAddress;



// Note: To to any write request on the network, we need to pay gas fee which will be deducted from the account we attached 
// Since i am only sending read requests, so i don't need to add my account

// web3.eth.accounts.wallet.add(config.PRIVATE_KEY);
// const account = config.ACCOUNT_ADDRESS;


// Create contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);


// calling contract function
exports.totalMinted = async () => {
  try {
    const totalMinted = await contract.methods.totalMinted().call();
    console.log({totalMinted: totalMinted.toString() })
    // return res.status(200).json({ totalMinted: totalMinted.toString() });
  } 
  catch (error) {
    // return res.status(501).json({ error: error });
  }
}

// Function to mint the NFT
// exports.mintNft = async (req, res ) => {
//     try {
//       const resp = await contract.methods.mint(req.receiverAddress, req.numberOfNFTs, req.url).send({ from: account, gas: 3000000 })
//       let resData = resp.logs[0].transactionHash
//       return res.status(200).json({ data: resdata });
//     } 
//     catch (error) {
//       return res.status(501).json({ error: error });
//     }
//   }

