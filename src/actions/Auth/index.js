import {
  getMnemonic as getMnemonicFetch,
  signUp as signUpFetch,
  signIn as signInFetch,
} from "../../services/auth";

export const setInput = (payload) => async (dispatch) => {
  dispatch({ type: "SET_INPUT", payload });
};

export const setInvite = (payload) => async (dispatch) => {
  dispatch({ type: "SET_INVITE", payload });
};

export const popupClose = () => async (dispatch) => {
  dispatch({ type: "POPUP_CLOSE" });
};

export const signIn = (mnemonic, history) => async (dispatch) => {
  dispatch({ type: "START_LOADING_SIGN_IN" });

  try {
    const isAuth = await signInFetch(mnemonic);
    dispatch({ type: "FINISH_LOADING_SIGN_IN" });

    if (isAuth) {
      if (isAuth.error) {
        dispatch({ type: "SIGN_IN_INVALID" });
        dispatch({
          type: "ERROR",
          payload: "Неверная мнемоническая фраза",
        });
      } else {
        dispatch({ type: "SIGN_IN_SUCCESS" });
        dispatch({ type: "SET_INPUT", payload: { ...isAuth } });
        history.push("/lk/balance");
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export const getMnemonic = () => async (dispatch) => {
  dispatch({ type: "START_LOADING_GET_MNEMONIC" });
  const mnemonic = await getMnemonicFetch();
  dispatch({ type: "SET_INPUT", payload: mnemonic });
  dispatch({ type: "FINISH_LOADING_GET_MNEMONIC" });
};

export const signUp = (mnemonic, history, invite) => async (dispatch) => {
  dispatch({ type: "START_LOADING_SIGN_UP" });

  try {
    const isAuth = await signUpFetch(mnemonic, invite);
    dispatch({ type: "FINISH_LOADING_SIGN_UP" });

    if (isAuth) {
      if (isAuth.error) {
        dispatch({ type: "SIGN_UP_INVALID" });
        dispatch({
          type: "ERROR",
          payload: "Неверная мнемоническая фраза",
        });
      } else {
        dispatch({ type: "SIGN_UP_SUCCESS" });
        dispatch({ type: "SET_INPUT", payload: { ...isAuth } });
        //history.push("/lk/balance");
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export const logout = (history) => async (dispatch) => {
  dispatch({ type: "LOGOUT" });
  dispatch({ type: "DELETE_MNEMONIC" });
  localStorage.removeItem("token");
  // history.push("/lk/balance");
};
