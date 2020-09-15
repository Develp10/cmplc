import {
  getWallets as getWalletsFetch,
  getIcoInfo as getIcoInfoFetch,
  convertCrypto as convertCryptoFetch,
  withdrawCmp as withdrawCmpFetch,
  getReferralCabinet as getReferralCabinetFetch,
} from "../../services/user";

export const setMnemonic = (mnemonic) => async (dispatch) => {
  dispatch({ type: "SET_MNEMONIC", payload: mnemonic });
};
export const setPreloader = (isPreloader) => async (dispatch) => {
  dispatch({ type: "SET_INPUT", payload: { isPreloader } });
};

export const popupClose = () => async (dispatch) => {
  dispatch({ type: "SET_INPUT", payload: { isError: false, isPopup: false } });
};

export const getReferralCabinet = () => async (dispatch) => {
  const json = await getReferralCabinetFetch();
  dispatch({ type: "SET_INPUT", payload: { isPreloader: false, ...json } });
};

export const getWallets = () => async (dispatch) => {
  const json = await getWalletsFetch();
  dispatch({ type: "SET_INPUT", payload: { isPreloader: false, ...json } });
};

export const getIcoInfo = () => async (dispatch) => {
  dispatch({ type: "SET_INPUT", payload: { isPreloader: true } });
  const json = await getIcoInfoFetch();
  dispatch({ type: "SET_INPUT", payload: { isPreloader: false, ...json } });
};

export const convertCrypto = (coin_code) => async (dispatch) => {
  const json = await convertCryptoFetch(coin_code);
  if (json) {
    if (json.error) {
      dispatch({
        type: "SET_INPUT",
        payload: {
          popupMessage: json.error,
          isError: true,
          isPopup: true,
        },
      });
    } else {
      dispatch({
        type: "SET_INPUT",
        payload: {
          popupMessage: json.message,
          isError: false,
          isPopup: true,
          ...json,
        },
      });
    }
  } else {
    dispatch({
      type: "SET_INPUT",
      payload: { popupMessage: json, isError: true, isPopup: true },
    });
  }
};

export const setCurrentWallet = (currentWallet) => async (dispatch) => {
  dispatch({ type: "SET_INPUT", payload: { currentWallet } });
};

export const withdrawCmp = (address, amount) => async (dispatch) => {
  const json = await withdrawCmpFetch(address, amount);
  if (json) {
    if (json.error) {
      dispatch({
        type: "SET_INPUT",
        payload: {
          popupMessage: json.error,
          isError: true,
          isPopup: true,
        },
      });
    } else {
      dispatch({
        type: "SET_INPUT",
        payload: { popupMessage: "Ok", isError: false, isPopup: true, ...json },
      });
    }
  } else {
    dispatch({
      type: "SET_INPUT",
      payload: { popupMessage: json, isError: true, isPopup: true },
    });
  }
  // dispatch({ type: "SET_INPUT", payload: json });
};
