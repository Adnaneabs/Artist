import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const initialWalletState = {
  user: {
    userAddress: "",
    userBalance: 0,
  },
};

//Reducer for storing the wallet configuration
const connectWalletReducer = (config = initialWalletState, action) => {
  switch (action.type) {
    case "CONNECT_WALLET":
      return {
        ...config,
        user: action.user,
      };
    case "DISCONNECT_WALLET":
      storage.removeItem("persist:root");
      return {
        ...initialWalletState,
      };
    case "TEZOS_INSTANCE":
      return { ...config };
    case "CONNECT_WALLET_ERROR":
      return config;
    default:
      return config;
  }
};

// To store the data for the NFTs
const tokenDataReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TOKEN_DATA":
      return action.payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  walletConfig: connectWalletReducer,
  tokenData: tokenDataReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;
