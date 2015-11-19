import React from "react";
import ReactDOM from "react-dom";
import Router , { Link , Route , RouteHandler , Redirect } from "react-router";


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

        <div>
        <div className="homeLoginSignUpHeader">

         <nav className="headerLinkOptions">
          <Link to="/home"><b> Home </b> </Link> ||
          <Link to="/SignUpPage"><b> Sign Up </b> </Link> ||
          <a href='#'><b> About </b> </a>
         </nav>

       </div>
        <div className="logInSignUpFormHolder">
        <form className='LoginForm' onSubmit= { this.handleSubmit }>

        <div className="notice_board">{ this.state.notice_board }</div>
        <label> Enter Your Email address </label> <br/>
        <input type='email' placeholder='a@b.xyz' ref='mail_address' /> <br/>
        <label> Enter Your Password </label> <br/>
        <input type='password' placeholder="***********" ref='password' /> <br/>
        <a href="#" className="forget_password" onclick= { this.handleForgotPassword } > Forgot password? </a> <br/>
        <input type='submit' value= 'LogIn' />
        </form>
        </div>
        </div>
    );
  }
}
