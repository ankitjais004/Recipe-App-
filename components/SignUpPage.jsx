import React from "react";
import Router , { Link , Route , RouteHandler , Redirect } from "react-router";

export default class SignUpPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { "NoticeBoard" : ""}
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var email = React.findDOMNode(this.refs.mail_address).value.trim();
    var create_password = React.findDOMNode(this.refs.create_password).value.trim();
    var confirm_password = React.findDOMNode(this.refs.confirm_password).value.trim();
    var user_DOB = React.findDOMNode(this.refs.DOB).value.trim();
    if(!username || !email ||!create_paasword || !confirm_password) {
      this.setState({ "Notice" : "Please fill up the form properly "})
    }else{
      if(confirm_password !== create_paasword){
        this.setState({ "Notice" : "Make sure you have typed confirm password correctly"})
      }
      //for sending data for verification from database
      //this.props.onCommentSubmit({ user: username, mailId: email, password: password});
    }


    React.findDOMNode(this.refs.username).value = '';
    React.findDOMNode(this.refs.mail_address).value = '';
    React.findDOMNode(this.refs.password).value = '';
    return;
  };

  render() {
    return (
      <div>
        <div className='homeLoginSignUpHeader'>
          <nav className="headerLinkOptions">
            <Link to="/home"> <b> Home </b> </Link> &nbsp; &nbsp;
            <Link to="/LogInPage"> <b> LogIn </b> </Link> &nbsp; &nbsp;
            <a href='#'> <b> About </b> </a>
          </nav>
        </div>


        <div className="signUpFormHolder">
          <form className='signUpForm' onSubmit= { this.handleSubmit }>
            <div className="noticeBoard">{ this.state.NoticeBoard }</div>
            Enter Your Full Name<br/>
            <p> <input type='text' placeholder='Enter Your Full Name' ref='username' /> </p>
            Enter Your Date Of Birth <br/>
            <p> <input type='text' placeholder='Enter Your Date Of Birth' ref='user_DOB' /> <br/> </p>
            Enter your Email Address <br/>
            <p>  <input type='email' placeholder='a@b.xyz' ref='mail_address' /> <br/> </p>
            Enter Your Password <br/>
            <p> <input type='password' placeholder="Enter Your Password" ref='create_password' /> <br/> </p>
            Confirm Your Password <br/>
            <p> <input type='password' placeholder="Enter Your Password again" ref='confirm_password' /> <br/></p>
            <input type='submit' value= 'SignUp' />
          </form>
        </div>
        { this.props.children }
      </div>
    );
  }
}