import config from "../configs/config";

//Запрашиваем баланс cmp, партнеров и кошельки
export const getReferralCabinet = async () => {
  const resp = await fetch(`${config.url}/users/referral_cabinet/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ token: localStorage.getItem("token") }),
  });
  const json = await resp.json();
  if (json) {
    return json;
  } else {
    return false;
  }
};
//Запрашиваем баланс cmp, партнеров и кошельки
export const getWallets = async () => {
  const resp = await fetch(`${config.url}/users/getWallets/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ token: localStorage.getItem("token") }),
  });
  const json = await resp.json();
  if (json) {
    return json;
  } else {
    return false;
  }
};
//Запрашиваем информацию о предпродаже cmp монет
export const getIcoInfo = async () => {
  const resp = await fetch(`${config.url}/users/ico_info/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ token: localStorage.getItem("token") }),
  });
  const json = await resp.json();
  if (json) {
    return json;
  } else {
    return false;
  }
};

export const convertCrypto = async (coin_code) => {
  const resp = await fetch(`${config.url}/users/convert_crypto/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      token: localStorage.getItem("token"),
      coin_code,
      amount: 1,
    }),
  });
  const json = await resp.json();
  if (json) {
    return json;
  } else {
    return false;
  }
};

//для вывода CMP
export const withdrawCmp = async (address, amount) => {
  const resp = await fetch(`${config.url}/users/withdraw_cmp/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      token: localStorage.getItem("token"),
      address,
      amount,
    }),
  });
  const json = await resp.json();
  if (json) {
    return json;
  } else {
    return false;
  }
};
