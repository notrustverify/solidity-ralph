import { Configuration } from '@alephium/cli'
import { PrivateKeyWallet } from '@alephium/web3-wallet'
import * as dotenv from 'dotenv'

export type Settings = {}

dotenv.config()
const configuration: Configuration<Settings> = {
  networks: {
    testnet: {
      nodeUrl: process.env.NODE_URL ?? 'https://wallet.testnet.alephium.org',
      settings: {
      },
      privateKeys: process.env.PRIVKEY_TESTNET.split(',')
    },
    mainnet:{
	   nodeUrl: process.env.NODE_URL ?? 'https://node-alephium.ono.re',
	   settings: {
	   },
	   privateKeys: process.env.PRIVKEY_MAINNET.split(',')
	   
    }, 
	   
    devnet: {
    nodeUrl: 'http://127.0.0.1:22973',
    settings: {
      privateKeys: []
    },
    privateKeys: process.env.PRIVKEY_DEVNET.split(',')
    
  }
  }
}

export default configuration
