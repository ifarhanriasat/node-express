const dotenv = require('dotenv')

// Load env vars if env is not production
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './server/config/local.env' })
}

module.exports = {
  PORT: process.env.PORT || 7777,
  JWT_SECRET: process.env.JWT_SECRET,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  INITIAL_CHIPS_AMOUNT: 100000,
  nodeUrl: "https://polygon-mainnet.infura.io/v3/90fa538d4dc04d12b96bd863c4533f4a",
  contractAddress: "0xe5192b47a8ec6383fcece32477c43048ceb19059", 
  PRIVATE_KEY: "0x",
  ACCOUNT_ADDRESS: "0x"
  }
