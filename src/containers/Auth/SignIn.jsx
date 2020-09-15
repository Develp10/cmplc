import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import Menu from "../../components/Auth/Menu";
import { setInput, signIn } from "../../actions/Auth";
import ErrorBlock from "../../components/ErrorBlock";
import "../../sass/auth/auth.sass";

class SignIn extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.onSetInput({ isAuth: true });
      this.props.history.push("/lk/balance");
    }
  }
  render() {
    const { mnemonic, onSignIn, onSetInput, isError, errorMsg, t } = this.props;
    return (
      <div className="auth">
        <div className="auth__background"></div>
        <Menu type={true} />
        <div className="auth__text-area">
          <h3>{t("auth__sign_in")}</h3>
          <input
            onChange={(event) => onSetInput({ mnemonic: event.target.value })}
            className="auth__input"
            value={mnemonic}
            placeholder={t("auth__mnemonic_phrase")}
          />
          <ErrorBlock isError={isError} errorMsg={errorMsg} />
          <div
            onClick={() => onSignIn(mnemonic, this.props.history)}
            className="auth__button"
          >
            {t("auth__sign_in__button")} &#10230;
          </div>
          <Link to="/restore-access">{t("auth__restore_access")}</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mnemonic: state.User.mnemonic,
  inviteId: state.User.inviteId,
  isError: state.App.isError,
  errorMsg: state.App.errorMsg,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSetInput: (payload) => {
      dispatch(setInput(payload));
    },
    onSignIn: (mnemonic, history) => {
      dispatch(signIn(mnemonic, history));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SignIn));
