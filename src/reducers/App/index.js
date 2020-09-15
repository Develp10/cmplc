const initialState = {
  invite: null,
  isAuth: false,
  isLoading: false,
  isLoadingGetMnemonic: false,
  isLoadingSignUp: false,
  isLoadingSignIn: false,
  isError: false,
  isPopup: false,
  errorMsg: null,
  popupMsg: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_INVITE":
      return {...state, invite: payload };
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "FINISH_LOADING":
      return { ...state, isLoading: false };
    case "START_LOADING_GET_MNEMONIC":
      return { ...state, isLoadingGetMnemonic: true };
    case "FINISH_LOADING_GET_MNEMONIC":
      return { ...state, isLoadingGetMnemonic: false };
    case "START_LOADING_SIGN_UP":
      return { ...state, isLoadingSignUp: true };
    case "FINISH_LOADING_SIGN_UP":
      return { ...state, isLoadingSignUp: false };
    case "START_LOADING_SIGN_IN":
      return { ...state, isLoadingSignIn: true };
    case "FINISH_LOADING_SIGN_IN":
      return { ...state, isLoadingSignIn: false };
    case "SET_INPUT":
      return { ...state, ...payload };
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        isAuth: true,
        isError: false,
        isPopup: false,
        popupMsg: null,
      };
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        isAuth: true,
        isPopup: true,
        popupMsg:
          "Обязательно скопируйте и сохраните в защищенном месте вашу мнемоническую фразу для входа в кабинет. Теперь переключитесь на вкладку входа и войдите в кабинет.",
      };
    case "SIGN_IN_INVALID":
      return { ...state, isAuth: false };
    case "POPUP_CLOSE":
      return { ...state, isPopup: false };
    case "LOGOUT":
      return { ...state, isAuth: false };
    case "ERROR":
      return { ...state, isError: true, errorMsg: payload };
    default:
      return state;
  }
};
