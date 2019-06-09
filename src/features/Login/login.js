import React, { PureComponent } from 'react';
import { Auth } from 'aws-amplify';
import {
  Button, FormGroup, FormControl, ControlLabel,
} from 'react-bootstrap';
import LoaderButton from '../LoaderButton';
import './login.css';

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = (e) => {
    const {
      state: {
        email,
        password,
      },
      props: {
        login,
      },
    } = this;

    e.preventDefault();

    const data = {
      email,
      password,
    };

    login(data);
  }

  render() {
    const {
      authenticating,
      error
    } = this.props;

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={authenticating}
            text="Login"
            loadingText="Authenticating.."
          >
            Login
          </LoaderButton>
        </form>
      </div>
    );
  }
}

export default Login;
