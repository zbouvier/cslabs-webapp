import * as React from 'react';
import {Component, FormEvent} from 'react';
import {Container, Form, Col, Button, Tabs, Tab, FormControlProps} from 'react-bootstrap';

export default class Login extends Component {

  state = {
    firstName: '',
    lastName: '',
    schoolEmail: '',
    gradYear: '',
    phoneNumber: '',
    confirmPass: '',
    password: ''
  };

  onFirstNameChange = (event: FormEvent<FormControlProps>) => {
    this.setState({firstName: event.currentTarget.value});
  };
  onPasswordChange = (event: FormEvent<FormControlProps>) => {
    this.setState({password: event.currentTarget.value});
  };
  onConfirmPassChange = (event: FormEvent<FormControlProps>) => {
    this.setState({confirmPass: event.currentTarget.value});
  };
  onLastNameChange = (event: FormEvent<FormControlProps>) => {
    this.setState({lastName: event.currentTarget.value});
  };
  onEmailChange = (event: FormEvent<FormControlProps>) => {
    this.setState({schoolEmail: event.currentTarget.value});
  };
  onPhoneChange = (event: FormEvent<FormControlProps>) => {
    this.setState({phoneNumber: event.currentTarget.value});
  };
  onGradChange = (event: FormEvent<FormControlProps>) => {
    this.setState({gradYear: event.currentTarget.value});
  };

  isEmailInvalid = () => {
    return this.state.schoolEmail.indexOf('@ius.edu') === -1;
  };
  isPassInvalid = () => {
    return this.state.password !== this.state.confirmPass;
  };

  render() {
    return (
      <Container>
        <Form>
          <Col sm='6'>
          <Tabs defaultActiveKey='Login' id='tabs'>
            <Tab eventKey='Login' title='Login'>
          <Form.Group controlId='formBasicUsername'>
            <Form.Label column={true}>Email</Form.Label>
            <Form.Control type='email' value={this.state.schoolEmail} onChange={this.onEmailChange} placeholder='Enter Email' />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label column={true}>Password</Form.Label>
              <Form.Control type='password' value={this.state.password} onChange={this.onPasswordChange} placeholder='Password' />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Remember Me' />
          </Form.Group>
          <Button variant='primary' type='submit'>Login</Button>
            </Tab>
            <Tab eventKey='Register' title='Register'>
              <Form.Group controlId='formBasicFirstName'>
                  <Form.Label column={true}>First Name</Form.Label>
                  <Form.Control type='text' value={this.state.firstName} onChange={this.onFirstNameChange} placeholder='Enter First Name' />
              </Form.Group>
              <Form.Group controlId='formBasicLastName'>
                <Form.Label column={true}>Last Name</Form.Label>
                <Form.Control type='text' value={this.state.lastName} onChange={this.onLastNameChange} placeholder='Enter Last Name' />
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                  <Form.Label column={true}>Email</Form.Label>
                  <Form.Control
                    isInvalid={this.isEmailInvalid()}
                    type='text'
                    value={this.state.schoolEmail}
                    onChange={this.onEmailChange}
                    placeholder='Enter School Email'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please provide an email with @ius.edu
                  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='formBasicGradTime'>
                  <Form.Label column={true}>Graduation Year</Form.Label>
                  <Form.Control type='number' value={this.state.gradYear} onChange={this.onGradChange} placeholder='Enter Graduation Year' />
              </Form.Group>
              <Form.Group controlId='formBasicPhoneNumber'>
                <Form.Label column={true}>Phone Number</Form.Label>
                <Form.Control type='number' value={this.state.phoneNumber} onChange={this.onPhoneChange} placeholder='Enter Phone Number' />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                  <Form.Label column={true}>Password</Form.Label>
                  <Form.Control type='password' value={this.state.password} onChange={this.onPasswordChange} placeholder='Password' />
              </Form.Group>
              <Form.Group controlId='formBasicConfirmPassword'>
                <Form.Label column={true}>Confirm Password</Form.Label>
                <Form.Control
                  isInvalid={this.isPassInvalid()}
                  type='password'
                  value={this.state.confirmPass}
                  onChange={this.onConfirmPassChange}
                  placeholder='Password'
                />
                <Form.Control.Feedback type='invalid'>
                  The password did not match, please try again.
                </Form.Control.Feedback>
                <Button variant='primary' type='submit'>Register</Button>
              </Form.Group>
            </Tab>
          </Tabs>
          </Col>
        </Form>
      </Container>
    );
  }
}