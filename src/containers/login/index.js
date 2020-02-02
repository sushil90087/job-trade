import React from "react";
import { connect } from "react-redux";
import RegistrationForm from "../../components/registration";
import Login from "../../components/login";
import { switchLogin } from "./store/actions";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    }
  }

  switchLoginHandler = (isLogin) => {
    this.setState({
      login: isLogin
    });
    this.props.dispatch(switchLogin(isLogin));
  }
 
  render() {
    return (
      <div className="home-container">
        {this.state.login ? (
          <Login switchLogin={this.switchLoginHandler}/>
        ): <RegistrationForm switchLogin={this.switchLoginHandler}/>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.landingReducer.isLogin
  };
};

export default connect(mapStateToProps)(LandingPage);