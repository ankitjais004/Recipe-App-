import React from "react";
import ReactDOM from "react-dom";

export default class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = { "Notice" : ""}
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleSubmit(e){
    e.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var email = React.findDOMNode(this.refs.mail_address).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if(!username || !email ||!paasword) {
      this.setState{ "Notice": "Please Enter Your Details"}
    }
    //for sending data for verification from database
    //this.props.onCommentSubmit({ user: username, mailId: email, password: password});

    React.findDOMNode(this.refs.username).value = '';
    React.findDOMNode(this.refs.mail_address).value = '';
    React.findDOMNode(this.refs.password).value = '';
    return;
  }
  render() {
    return (
        <div className='header'>
        <nav>
        <a href='#'><h3> Home </a>
        <a href='#'><h3> LogIn </a>
        <a href='#'><h3> About </a>
        </nav>
        </div>
        <div className= 'SignUpForm'>
        <form className='SignUp' onSubmit= {this.handleSubmit()}>
        <input type='text' placeholder='Enter Your Full Name' ref='username' />
        <input type='text' placeholder='Enter Your EmailId' ref='mail_address' />
        <input type='password' placeholder="Enter Your Password" ref='password' />
        <input type='submit' value= 'SignUp' />
        </form>
    );
  }
}
