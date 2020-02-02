import React from "react";
import "./style.scss";
import { withStyles } from "@material-ui/styles";
import { TextField, Button } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import GetIcons from "../../common/utility/iconSelector";
import ForwardRoundedIcon from "@material-ui/icons/ForwardRounded";

const styles = theme => ({
  inputRoot: {
    width: "100%"
  }
});

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formControls: this.props.fieldList ? this.props.fieldList : []
    };
  }

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
              {field.iconName ? GetIcons(field.iconName) : null}
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
      <div className="dynamic-form-container">
        <div className="form-container">
          <form noValidate autoComplete="off">
            <div className="form-group">{this.getFieldList()}</div>
            <div className="form-action">
              <div className="action-items"></div>
              <div className="action-items">
                <Button
                  variant="contained"
                  color="primary"
                  name={this.props.actionButton.name}
                  classes={{ root: this.props.classes.inputRoot }}
                  onClick={this.handleRegistration}
                  startIcon={<ForwardRoundedIcon />}
                >
                  {this.props.actionButton.label}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DynamicForm);
