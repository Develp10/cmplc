import React, { Component } from "react";
import { connect } from "react-redux";
import { setPreloader, getIcoInfo } from "../../actions/User";
import Preloader from "../../components/Preloader";
import Chart from "../../components/Chart/Chart";
import PresaleTitle from "../../components/Presale/PresaleTitle";
import ProgressBarBody from "../../components/Presale/ProgressBarBody";
import Explanation from "../../components/Presale/Explanation";
import ProgressBarDate from "../../components/Presale/ProgressBarDate";

export class Presale extends Component {
  componentDidMount() {
    this.props.onSetPreloader(true);
    this.props.onGetIcoInfo();
  }
  render() {
    const { ico_info, isPreloader } = this.props;
    return (
      <div>
        {isPreloader ? (
          <Preloader />
        ) : (
          <>
            <PresaleTitle ico_info={ico_info} />
            <Chart ico_info={ico_info} />
            <ProgressBarDate ico_info={ico_info}/>
            <ProgressBarBody ico_info={ico_info} />
            <Explanation />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ico_info: state.User.ico_info,
  isPreloader: state.User.isPreloader,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetIcoInfo: () => {
      dispatch(getIcoInfo());
    },
    onSetPreloader: (isPreloader) => {
      dispatch(setPreloader(isPreloader));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Presale);
