import React from "react";
import ReactDOM from "react-dom";

export default class LogInPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { "notice_board" : "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    var email = React.findDOMNode(this.refs.mail_address).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if(!email || !password) {
      this.setState({
        notice_board : "Please provide both email address and password"
      });
      return false;
    }else{
      //for sending data for verification from database
      //this.props.onCommentSubmit({ mailId: email, password: pass});
    }
  };

  handleForgotPassword(){
    //yet to be done
  }

  render() {
    return (
      <div className="logIn">
        <form className='LoginForm' onSubmit= { this.handleSubmit }>

          <div className="notice_board">{ this.state.notice_board }</div>

          <input type='email' placeholder='a@b.xyz' ref='mail_address' />
          <input type='password' placeholder="Enter Your Password" ref='password' />
          <a href="#" className="forget_password" onclick= { this.handleForgotPassword } > Forgot password? </a>
          <input type='submit' value= 'LogIn' />

        </form>
      </div>
    );
  }
}
