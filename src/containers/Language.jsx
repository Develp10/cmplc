import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { setInvite } from "../actions/Auth";

class Language extends Component {
  componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.language
    ) {
      //this.props.onSetInvite(this.props.match.params.invite);
    }
  }
  render() {
    return <Redirect to="/auth/signUp" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetInvite: (invite) => {
      dispatch(setInvite(invite));
    },
  };
};
export default connect(null, mapDispatchToProps)(Language);
