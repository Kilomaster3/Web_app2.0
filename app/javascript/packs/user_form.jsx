import React from 'react'
class UserForm extends React.Component{
  state = {
    login: '',
    password: '',
  };
  
  handleChange = e => {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value,
    });
  };
  
  handleSubmit = e => {
    const { login, password } = this.state;

    e.preventDefault();
    alert(
      login: ${login}
      password: ${password}
    );
  };
  
  render(){
    const { login, password } = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <Fields
            text="Add login"
            type="text"
            name="login"
            value={login}
            onChange={this.handleChange}
           />
          <Fields
            text="Add password"
            type="password"
            name= "password"
            value={password}
            onChange={this.handleChange}
           />
          <MuiThemeProvider>
            <RaiseButtin
              label="Update"
              fullWidth={true}
              style={style.button}
             >
               <input
                 type="submit"
                 style={style.exampleImageInput}
               />
             </RaiseButtin>
          </MuiThemeProvider>
        </form>
      </div>
    );
  }
}

export default UserForm;
