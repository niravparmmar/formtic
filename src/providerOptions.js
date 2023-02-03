import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Fortmatic from "fortmatic";

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Web 3 Modal Demo", // Required
      infuraId: process.env.INFURA_KEY // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: process.env.INFURA_KEY // required
    }
  },
  fortmatic: {
    package: Fortmatic, // required
    options: {
      infuraId: "460f40a260564ac4a4f4b3fffb032dad", // required
      key: "pk_live_ADC2EB9A5162F4F4"
    }
  }
};
