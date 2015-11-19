import React from "react";
import ReactDOM from "react-dom";
import Router , { Link , Route , RouteHandler , Redirect } from "react-router";


export default class LogInPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { "NoticeBoard" : "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    var email = React.findDOMNode(this.refs.mailAddress).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if(!email || !password) {
      this.setState({
        notice_board : "Please provide both email address and password"
      });
      return false;
    }
    /*else{
      for sending data for verification from database
      this.props.onCommentSubmit({ mailId: email, password: pass});
    }*/
  };

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
           <div className="notice_board">{ this.state.NoticeBoard }</div>
           <label> Enter Your Email address </label> <br/>
           <p><input type='email' placeholder='a@b.xyz' ref='mailAddress' /> </p>
           <label> Enter Your Password </label> <br/>
           <input type='password' placeholder="***********" ref='password' /><br/>
           <Link to="/ForgetPassword"> Forgot password? </Link><br/>
           <input type='submit' value= 'LogIn' />
         </form>
       </div>
      </div>
    );
  }
}
