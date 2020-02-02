import React from "react";
import "./style.scss";
import * as constants from "./constant";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { TextField, Button } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import DraftsRoundedIcon from "@material-ui/icons/DraftsRounded";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ForwardRoundedIcon from "@material-ui/icons/ForwardRounded";

const styles = theme => ({
  inputRoot: {
    width: "100%"
  },
  iconRoot: {
    fill: constants.iconColor
  }
});

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formControls: constants.formControlsList
    };
  }

  getIcons = iconName => {
    switch (iconName) {
      case "password":
        return <VpnKeyIcon classes={{ root: this.props.classes.iconRoot }} />;
      case "email":
        return (
          <DraftsRoundedIcon classes={{ root: this.props.classes.iconRoot }} />
        );
      case "user":
        return (
          <AccountBoxRoundedIcon
            classes={{ root: this.props.classes.iconRoot }}
          />
        );
      case "phone":
        return (
          <PhoneIphoneRoundedIcon
            classes={{ root: this.props.classes.iconRoot }}
          />
        );
      default:
        return () => {};
    }
  };

  getTextFields(field, index) {
    return (
      <TextField
        type={field.type}
        id={`outlined-basic-${index}`}
        name={field.name}
        label={field.label}
        value={this.state.formControls[index].value}
        onChange={e => {
          this.handleChange(e, index, field);
        }}
        required={field.required}
        classes={{ root: this.props.classes.inputRoot }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {this.getIcons(field.icon)}
            </InputAdornment>
          )
        }}
        error={!!this.state.formControls[index].errorMessage}
      />
    );
  }

  getFieldList() {
    return this.state.formControls.map((field, index) => (
      <div className="field-container" key={index}>
        {this.getTextFields(field, index)}
        <div className="error-message">{field.errorMessage}</div>
      </div>
    ));
  }

  handleChange = (event, index, fieldData) => {
    const value = event.target.value;
    let newState = [...this.state.formControls];
    newState[index].value = value;
    newState[index].errorMessage = "";
    this.setState({
      formControls: newState
    });
  };

  handleRegistration = event => {
    // validate required Fields
    const newState = [...this.state.formControls];
    const validatedState = this.validateRequiredFields(newState);
    this.setState({
      formControls: validatedState
    });
  };

  switchLogin = () => {
    if (this.props.switchLogin) this.props.switchLogin(true);
  };

  validateRequiredFields = fieldControls => {
    fieldControls.forEach((field, key) => {
      if (!field.value) field.errorMessage = "Field is mandatory.";
      else field.errorMessage = "";
    });
    console.log(fieldControls);
    return fieldControls;
  };

  render() {
    return (
      <div className="register-container">
        <div className="register-content-container">
          <div className="register-header">
            <Typography variant="h5" gutterBottom>
              Registration
            </Typography>
          </div>
          <div className="sub-header">
            <div className="sub-header-content">
              <div>{constants.SUB_HEADER}</div>
              <div>{constants.SUB_HEADER_INFO}</div>
            </div>
          </div>
          <div className="form-container">
            <form noValidate autoComplete="off">
              <div className="form-group">{this.getFieldList()}</div>
              <div className="form-action">
                <div className="action-items">
                  <button
                    type="button"
                    className="link-button btn-link-primary"
                    onClick={this.switchLogin}
                  >
                    {constants.ALREADY_MEMBER}
                  </button>
                </div>
                <div className="action-items">
                  <Button
                    variant="contained"
                    color="primary"
                    name="registerSubmit"
                    classes={{ root: this.props.classes.inputRoot }}
                    onClick={this.handleRegistration}
                    startIcon={<ForwardRoundedIcon />}
                  >
                    Register
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(RegistrationForm);
