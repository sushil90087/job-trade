import React, { useState } from "react";
import { connect } from "react-redux";
import "./style.scss";
import * as constants from "./constant";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ForwardRoundedIcon from "@material-ui/icons/ForwardRounded";
import { Button } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  fieldRoot: {
    width: "100%"
  },
  buttonRoot: {
    width: "100%"
  },
  iconRoot: {
    fill: constants.iconColor
  }
}));

const Login = props => {
  const classes = useStyle();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");

  const handleForgetPassword = _event => {};

  const handleChange = (event, type) => {
    const value = event.target.value;
    switch (type) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleLoginSubmit = () => {
    // Validate the required fields
    validateFields();
  };

  const validateFields = () => {
    let status = true;
    if (!username) {
      setUserError(constants.REQUIRED_FIELD);
      status = false;
    } else {
      setUserError(false);
    }
    // validate required password
    if (!password) {
      setPassError(constants.REQUIRED_FIELD);
      status = false;
    } else {
      setPassError(false);
    }
    return status;
  };

  const switchLogin = () => {
    if (props.switchLogin) props.switchLogin(false);
  };

  return (
    <div className="login-container">
      <div className="login-content-container">
        <div className="login-header">
          <span className="header-title">Login</span>
        </div>
        <div className="sub-header-container">
          <div className="sub-header">
            Welcome back! Login to access the Job Trade
          </div>
          <div className="sub-header">
            <span>Did you </span>
            <button
              className="link-button btn-link-secondary"
              onClick={handleForgetPassword}
            >
              forget your password?
            </button>
          </div>
        </div>

        <form noValidate autoComplete="off">
          <div className="login-body">
            <div className="field-container">
              <TextField
                classes={{ root: classes.fieldRoot }}
                id="username"
                label="Username"
                required
                value={username}
                onChange={e => {
                  handleChange(e, "username");
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle classes={{ root: classes.iconRoot }} />
                    </InputAdornment>
                  )
                }}
                error={!!userError}
              />
              {userError ? (
                <div className="error-message">{userError}</div>
              ) : null}
            </div>
            <div className="field-container">
              <TextField
                type="password"
                classes={{ root: classes.fieldRoot }}
                id="password"
                label="Password"
                required
                value={password}
                onChange={e => {
                  handleChange(e, "password");
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon classes={{ root: classes.iconRoot }} />
                    </InputAdornment>
                  )
                }}
                error={!!passError}
              />
              {passError ? (
                <div className="error-message">{passError}</div>
              ) : null}
            </div>
          </div>
          <div className="login-footer">
            <Button
              variant="contained"
              color="primary"
              name="loginSubmit"
              classes={{ root: classes.buttonRoot }}
              startIcon={<ForwardRoundedIcon />}
              onClick={handleLoginSubmit}
            >
              Continue
            </Button>
            <div className="register-link">
              <button
                type="button"
                className="link-button btn-link-primary"
                onClick={switchLogin}
              >
                {constants.NOT_REGISTERED}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Login);
