import "../../sass/taskFeed/taskFeed.sass";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getWallets, setCurrentWallet } from "../../actions/User";
import MenuOffers from "../../components/TaskFeed/MenuOffers";
import Switchers from "../../components/TaskFeed/Switchers";
import { Slider, FormControlLabel, Checkbox } from "@material-ui/core";
import TaskFeedTable from "../../components/TaskFeed/TaskFeedTable";
class TaskFeed extends Component {
  render() {
    return (
      <div className="task-feed">
        <div className="task-feed__title">
          <p className="title">Лента заданий</p>
        </div>
        <div className="task-feed__sub-title">
          <span style={{ color: "#b5b5b5" }}>
            Найдено 75 предложений по вашим фильтрам
          </span>
        </div>
        <div className="task-feed__body">
          <div className="task-feed__left">
            <MenuOffers />
            <Switchers />
            <div>
              <p>Размер вознаграждения</p>
              <Slider
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                value={[20, 37]}
              />
            </div>
            <div className="task-feed__type-offers">
              <p>Тип оффера</p>
              <FormControlLabel
                control={
                  <Checkbox
                    //checked={state.checkedB}
                    //onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Мобильный оффер"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    //checked={state.checkedB}
                    //onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Веб-оффер"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    //checked={state.checkedB}
                    //onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="API"
              />
            </div>
          </div>
          <div className="task-feed__right">
            <TaskFeedTable />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inviters: state.User.inviters,
  wallets: state.User.wallets,
  currentWallet: state.User.currentWallet,
  lastCompletedTasks: state.User.lastCompletedTasks,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetWallets: () => {
      dispatch(getWallets());
    },
    onSetCurrentWallet: (currentWallet) => {
      dispatch(setCurrentWallet(currentWallet));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFeed);
