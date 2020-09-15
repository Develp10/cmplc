import React, {Component} from "react";
import { withTranslation } from "react-i18next";
import progressBar from "../../images/Presale/progressBar.svg";
import "../../sass/presale/progressBarBody.sass";
class ProgressBarBody extends Component {
  constructor(props) {
    super(props)
    this.state = {fontSize: "1rem"}
    this.progressBars = []
    for (let i = 0; i < 4; ++i) {
      this.progressBars.push(React.createRef())
    }
  }
  updateFontWidth = () => { // arrow function doesn't require binding this
    if (this.progressBars.every((ref)=>(ref.current !== null))) {
      let widths = this.progressBars.map((ref)=>(ref.current.clientWidth))
      widths.sort((a, b)=>(a < b))
      for (let i = widths.Length - 1; i > 0; --i) {
        widths[i] -= widths[i - 1]
      }
      let minWidth = Math.min.apply(null, widths)
      this.setState({fontSize: (minWidth / 5.5) + "px"})
    }
  }
  componentDidMount() {
      this.updateFontWidth()
      window.addEventListener('resize', this.updateFontWidth)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateFontWidth)
  }
  render () {
  const t = this.props.t;
  const ico_info = this.props.ico_info;
  if (!ico_info) {
    return "";
  }
  const percentsStartingPrice =
    (ico_info.scales2.starting_price / ico_info.scales2.final_market_cup) * 100;
  const percentsYesterdayPrice =
    (ico_info.scales2.yesterday_price / ico_info.scales2.final_market_cup) *
    100;
  const percentsCurrentPrice =
    (ico_info.scales2.current_price / ico_info.scales2.final_market_cup) * 100;
  return (
    <div className="progress-bar-body">
      <p className="progress-bar-body__title">
        {t("progress_bar_body__title")}
      </p>
      <div className="progress-bar-body__title-container">
        <div className="progress-bar-body__title-item-left">
          <section>
          <h6>{t("progress_bar_body__starting_price")}</h6>
          <p className="progress-bar-body__title-price">
            {ico_info.scales2.starting_price} USDT
          </p>
          </section>
          <section>
          <h6 className="no-mr">{t("progress_bar_body__presale_phase")}</h6>
          </section>
        </div>
        <div className="progress-bar-body__title-item-right">
          <section>
          <h6>{t("progress_bar_body__total_price")}</h6>
          <p>{ico_info.scales2.finale_price} CMP</p>
          </section>
          <section>
          <h6>{t("progress_bar_body__final_market_cap")}</h6>
          <p>{ico_info.scales2.final_market_cup} CMP</p>
          </section>
        </div>
      </div>
      <div className="progress-bar-body__container">
        <div
          style={{
            width: percentsYesterdayPrice > 15 ? percentsYesterdayPrice : "27%",
            fontSize: this.state.fontSize
          }}
          className="progress-bar-body__filler-yesterday-price"
          ref={this.progressBars[0]}
        >
          <p className="progress-bar-body__filler-text">{`${ico_info.scales2.yesterday_price} USDT`} </p>
        </div>
        <div
          style={{
            width: percentsCurrentPrice > 20 ? percentsCurrentPrice : "17%",
            fontSize: this.state.fontSize
          }}
          ref={this.progressBars[1]}
          className="progress-bar-body__filler-current-price"
        >
          <p className="progress-bar-body__filler-text">{`${ico_info.scales2.currency_price} USDT`}</ p>
        </div>
        <div
          style={{
            width: percentsStartingPrice > 10 ? percentsStartingPrice : "8%",
            fontSize: this.state.fontSize
          }}
          className="progress-bar-body__filler-starting-price"
          ref={this.progressBars[2]}
        >
          <p className="progress-bar-body__filler-text" >{`${ico_info.scales2.starting_price} USDT`}</p>
        </div>
        <div className="progress-bar-body__base" style={{fontSize: this.state.fontSize}} ref={this.progressBars[3]}>
          <p className="progress-bar-body__filler-text">{`${ico_info.scales2.finale_price} USDT`}</p>
        </div>
      </div>

      <div className="progress-bar-body__footer-container">
        <div className="progress-bar-body__footer-item-right">
          <section>
            <h6>{t("progress_bar_body__expected_supply_at_network_launch")} {ico_info.scales2.network_launch}</h6>
            <p>{ico_info.scales2.total_amount} CMP</p>
          </section>
          <section>
            <h6>{t("progress_bar_body__future_market_cap")}</h6>
            <p>{ico_info.scales2.future_market_cap} USD</p>
          </section>
        </div>
      </div>
    </div>
    );
  }
};

export default withTranslation()(ProgressBarBody);
