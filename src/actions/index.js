/**This document includes actions creators for contract calls */
import { TezosToolkit } from "@taquito/taquito";
import { NetworkType } from "@airgap/beacon-sdk";
import config from "../config";
import axios from "axios";
export const BURN_ADDRESS = "tz1burnburnburnburnburnburnburjAYjjX";

export const connectWallet = ({ wallet, Tezos }) => {
  return async (dispatch) => {
    try {
      var payload = {};

      Tezos.setWalletProvider(wallet);

      const activeAccount = await wallet.client.getActiveAccount();
      if (!activeAccount) {
        await wallet.requestPermissions({
          network: {
            type: NetworkType.MAINNET,
            rpcUrl: "https://mainnet.smartpy.io", //Use the network where the contract has been deployed
          },
        });
      }
      const userAddress = await wallet.getPKH();
      const balance = await Tezos.tz.getBalance(userAddress);

      payload.user = {
        userAddress: userAddress,
        balance: balance.toNumber(),
      };
      dispatch(_walletConfig(payload.user));
    } catch (error) {
      console.log(error);
      dispatch({
        type: "CONNECT_WALLET_ERROR",
      });
    }
  };
};

export const _walletConfig = (user) => {
  return {
    type: "CONNECT_WALLET",
    user,
  };
};

export const disconnectWallet = ({ wallet, setTezos }) => {
  return async (dispatch) => {
    setTezos(new TezosToolkit("https://mainnet.smartpy.io")); //Use the network where the contract has been deployed

    dispatch({
      type: "DISCONNECT_WALLET",
    });

    if (wallet) {
      await wallet.client.removeAllAccounts();
      await wallet.client.removeAllPeers();
      await wallet.client.destroy();
    }
  };
};
export const fetchContractData = ({ Tezos }) => {
  return async (dispatch, getState) => {
    try {
      const contract = await Tezos.wallet.at(config.contractAddress);

      const storage = await contract.storage();
      dispatch({ type: "SET_VALUE", payload: storage.toNumber() });
    } catch (e) {
      //dispatch
      console.log(e);
    }
  };
};

export const incrementData = ({ Tezos }) => {
  return async (dispatch, getState) => {
    try {
      const contract = await Tezos.wallet.at(config.contractAddress);

      const op = await contract.methods.increment(1).send();
      await op.confirmation();
      const newStorage = await contract.storage();
      dispatch({ type: "SET_VALUE", payload: newStorage.toNumber() });
    } catch (e) {
      console.log(e);
    }
  };
};

export const decrementData = ({ Tezos }) => {
  return async (dispatch, getState) => {
    try {
      const contract = await Tezos.wallet.at(config.contractAddress);

      const op = await contract.methods.decrement(1).send();
      await op.confirmation();
      const newStorage = await contract.storage();
      dispatch({ type: "SET_VALUE", payload: newStorage.toNumber() });
    } catch (e) {
      console.log(e);
    }
  };
};

/**
 *
 * Mint function requires 2 parameters : Amount et Metadata URL
 */
export const mintNFT = ({ Tezos, amount, metadata }) => {
  return async (dispatch) => {
    try {
      //instance of the markeplace contract used to call the entry point on the contract
      const contract = await Tezos.wallet.at(config.contractAddress);

      //Convert Metadata to hex code
      let bytes = "";
      for (var i = 0; i < metadata.length; i++) {
        bytes += metadata.charCodeAt(i).toString(16).slice(-4);
      }

      //Call the entry point
      const op = await contract.methods.mint(amount, bytes).send();
      await op.confirmation();
      // To fetch data
      dispatch(fetchData());
    } catch (e) {
      console.log(e);
    }
  };
};

/** Collect entry point requires 1 parameter : Token id */
export const collectNFT = ({ Tezos, amount, id }) => {
  return async (dispatch) => {
    try {
      const contract = await Tezos.wallet.at(config.contractAddress);

      const op = await contract.methods
        .collect(id)
        .send({ mutez: true, amount: amount }); // Send the amount required to collect the NFT (mutez units)
      await op.confirmation();

      dispatch(fetchData());
    } catch (e) {
      console.log(e);
    }
  };
};

export const burnNFT = ({ Tezos, id, amount }) => {
  return async (dispatch) => {
    try {
      const contract = await Tezos.wallet.at(config.contractAddress);
      const token = await Tezos.wallet.at(config.tokenAddress);
      const op = await token.methods
        .transfer([
          {
            from_: "KT19rNH2JG8UgYrVzsLuCmTbZgszHqVfnUd4",
            txs: [
              {
                to_: "tz1Ke2h7sDdakHJQh8WX4Z372du1KChsksyU",
                token_id: id,
                amount: amount,
              },
            ],
          },
        ])
        .send();
      await op.confirmation();
      dispatch(fetchData());
    } catch (e) {
      console.log(e);
    }
  };
};

export const hex2buf = (hex) => {
  return new Uint8Array(hex.match(/[\da-f]{2}/gi).map((h) => parseInt(h, 16)));
};

//Convert Bytes into strings back
export function bytes2Char(hex) {
  return Buffer.from(hex2buf(hex)).toString("utf8");
}

//It's an action creator
export const fetchData = () => {
  return async (dispatch) => {
    try {
      // Data from the markerplace address
      const response = await axios.get(
        `https://api.mainnet.tzkt.io/v1/contracts/${config.contractAddress}/bigmaps/data/keys`
      );
      //data from the token address
      const response1 = await axios.get(
        `https://api.mainnet.tzkt.io/v1/contracts/${config.tokenAddress}/bigmaps/token_metadata/keys`
      );
      const d1 = response.data;
      const d2 = response1.data; // returns an array with values token id and token info containing bytes for IPFS hash
      let tokenData = [];
      for (let i = 0; i < d1.length; i++) {
        const s = bytes2Char(d2[i].value.token_info[""]).split("//").at(-1);

        const res = await axios.get("https://ipfs.io/ipfs/" + s);

        const l1 = d1[i].value;
        const l2 = res.data;
        tokenData[i] = {
          ...l1,
          ...l2,
          token_id: d2[i].value.token_id,
        };
      }
      console.log(tokenData);
      dispatch({ type: "SET_TOKEN_DATA", payload: tokenData });
    } catch (e) {
      console.log(e);
    }
  };
};
