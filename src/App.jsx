import React, { Component } from "react";
import ROUTES, { RenderRoutes } from "./routes";
import { connect } from "react-redux";
import { setInput } from "./actions/Auth";
import AppBar from "./containers/AppBar/AppBar";
import Footer from "./components/Footer/Footer";
import "./sass/app.sass";
import "./fonts/GothamPro/stylesheet.css";

export class App extends Component {
  componentDidMount() {
    if (!this.props.isAuth) {
      if (localStorage.getItem("token")) {
        this.props.onIsAuth();
      }
    }
  }

  render() {
    return (
      <>
        <AppBar />
        <div className="body">
          <RenderRoutes routes={ROUTES} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.App.isAuth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onIsAuth: () => {
      dispatch(setInput({ isAuth: true }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
