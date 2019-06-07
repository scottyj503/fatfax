import React, { PureComponent } from 'react';
import { Auth } from 'aws-amplify';
import {
  Button, FormGroup, FormControl, ControlLabel,
} from 'react-bootstrap';
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

  // handleSubmit = async event => {
  //   try {
  //     event.preventDefault();

  //     const test = await Auth.signIn(this.state.email, this.state.password);
  //     alert('Logged in');
  //   }
  //   catch (e) {
  //     alert(e.message);
  //   }
  // }
  handleSubmit = e => {
    const {
      state: {
        email,
        password
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

    debugger;
    login(data);
  }

  render() {
    const { authenticated } = this.props;
    if (authenticated) debugger;
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
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
