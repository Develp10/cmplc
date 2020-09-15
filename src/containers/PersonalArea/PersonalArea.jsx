import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import PaymentHistory from "../../components/PaymentHistory";
import "../../sass/personalArea/personalArea.sass";
import Partners from "../../components/PersonalArea/Partners";
import LastCompletedTasks from "../../components/PersonalArea/LastCompletedTasks";
import MenuPersonalArea from "../../components/MenuPersonalArea";
import { connect } from "react-redux";
import {
  convertCrypto,
  getReferralCabinet,
  getWallets,
  popupClose,
  setCurrentWallet,
  setPreloader,
  withdrawCmp,
} from "../../actions/User";
import BalanceTable from "../../components/PersonalArea/BalanceTable";
import Rate from "../../components/PersonalArea/Rate";
import StatusPopup from "../../components/StatusPopup";
import Preloader from "../../components/Preloader";

class PersonalArea extends Component {
  componentDidMount() {
    const { wallets, onGetWallets, onSetPreloader } = this.props;
    if (!wallets || wallets.length === 0) {
      onSetPreloader(true);
    }
    onGetWallets();
  }
  render() {
    const {
      wallets,
      currentWallet,
      onSetCurrentWallet,
      onGetWallets,
      currency_prices,
      onConvertCrypto,
      payment_history,
      inviters,
      last_tasks,
      onWithdrawCmp,
      isError,
      isPopup,
      popupMessage,
      onPopupClose,
      isPreloader,
      t,
    } = this.props;
    //payment_history = [{date: Date.now(), status: "Pending", address:"0xde0b2956..", amount:0.001,val:'ETC'}]
    return (
     
        <div className="personal-area">
          <p className="title">{t("menu__finance")}</p>
          <MenuPersonalArea type={true} />

          {isPreloader ? (
            <Preloader />
          ) : (
            <div className="personal-area__body">
              <div>
                <BalanceTable
                  wallets={wallets}
                  currentWallet={currentWallet}
                  setCurrentWallet={onSetCurrentWallet}
                  onGetWallets={onGetWallets}
                  currency_prices={currency_prices}
                  convertCrypto={onConvertCrypto}
                  withdrawCmp={onWithdrawCmp}
                  isError={isError}
                  isPopup={isPopup}
                  popupMessage={popupMessage}
                  popupClose={onPopupClose}
                />
                <PaymentHistory payment_history={payment_history} />
              </div>
              <div>
                <Partners
                  wallet={wallets.find((v) => v.currency === "CMP")}
                  inviters={inviters}
                />
                <LastCompletedTasks last_tasks={last_tasks} />
                <Rate
                  currency_prices={currency_prices}
                  cmpWallet={wallets.find((v) => v.currency === "CMP")}
                />
              </div>
            </div>
          )}
          <StatusPopup
            isPopup={isPopup}
            popupClose={onPopupClose}
            isError={isError}
            statusMsg={popupMessage}
          />
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inviters: state.User.inviters,
  wallets: state.User.wallets,
  currentWallet: state.User.currentWallet,
  last_tasks: state.User.last_tasks,
  payment_history: state.User.payment_history,
  currency_prices: state.User.currency_prices,
  isError: state.User.isError,
  isPopup: state.User.isPopup,
  popupMessage: state.User.popupMessage,
  isPreloader: state.User.isPreloader,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetWallets: () => {
      dispatch(getWallets());
    },
    onSetCurrentWallet: (currentWallet) => {
      dispatch(setCurrentWallet(currentWallet));
    },
    onConvertCrypto: (coin_code) => {
      dispatch(convertCrypto(coin_code));
    },
    onWithdrawCmp: (address, amount) => {
      dispatch(withdrawCmp(address, amount));
    },
    onPopupClose: () => {
      dispatch(popupClose());
    },
    onSetPreloader: (isPreloader) => {
      dispatch(setPreloader(isPreloader));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PersonalArea));
