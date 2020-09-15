const initialState = {
  isPreloader: false,
  isError: false,
  isPopup: false,
  popupMessage: "",
  mnemonic: "",
  inviteId: "0",
  inviterlink: "",
  inviters: 0,
  invitedBy: 0,
  wallets: [{ currency: "BTC", address: "", balance: "0" }],
  currentWallet: 0, //index
  payment_history: [],
  currency_prices: [],
  lastCompletedTasks: [
    {
      name: "Webtoken Profit",
      type: "application",
      time: "+17",
      status: "waiting",
    },
    {
      name: "Webtoken Profit",
      type: "application",
      time: "+17",
      status: "waiting",
    },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_INPUT":
      return { ...state, ...payload };
    case "SET_MNEMONIC":
      return { ...state, mnemonic: payload };
    case "DELETE_MNEMONIC":
      return { ...state, mnemonic: "" };
    default:
      return state;
  }
};
