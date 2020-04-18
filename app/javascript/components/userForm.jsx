import React from 'react'
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', password_confirmation: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handleUsernameFormSubmit(event) {
    console.log('username: ' + this.state.username);
    event.preventDefault();
  }
  handelPasswordChange(event){
    this.setState({password: event.target.value});
  }
  handlePasswordFormSubmit(event){
    console.log('password: ' + this.state.password);
    event.preventDefault();
  }
  handlePassword_ConfirmationChange(event){
    this.setState({password_confirmation: event.target.value});
  }
  handlePassword_ConfirmationFormSubmit(event){
    console.log('password_confirmation: ' + this.state.password_confirmation);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleUsernameFormSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
          <input type="submit" value="Submit" />
        </div>
        <div>
          <label>
            Password:
            <input type="text" value={this.state.password} onChange={this.handelPasswordChange} />
          </label>
          <input type="submit" value="Submit" />
        </div>
        <div>
          <label>
            Password Confirmation:
            <input type="text" value={this.state.password_confirmation} onChange={this.handlePassword_ConfirmationChange} />
          </label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default UserForm;
