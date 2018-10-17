import React, { Component } from "react";
import { 
        FormGroup,
        Col,
        ControlLabel,
        FormControl,
        Checkbox,
        Button,
        // HelpBlock
 } from "react-bootstrap";
 
 class Login_Form extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }
  
    getValidationState() {
      const length = this.state.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }

    getEmailValidationState() {
        
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <form className="Login">
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
              type="Email"
              value={this.state.value}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            
            </Col>
          </FormGroup>
<br />
        <FormGroup 
            controlId="formHorizontalPassword"
            validationState={this.getValidationState()}
        >
            <Col componentClass={ControlLabel} sm={2}>
            Password
            </Col>
            <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
            </Col>
        </FormGroup>

        <FormGroup>
            <Col smOffset={2} sm={10}>
            <Button type="submit">Sign in</Button>
            </Col>
        </FormGroup>
        </form>
      );
    }
  }

export default Login_Form;