import React from "react";
import Link from "react-router"

export default class SignUpPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { "Notice" : ""}
    this.handleSubmit = this.handleSubmit.bind(this);
    };

  handleSubmit(e){
    e.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var email = React.findDOMNode(this.refs.mail_address).value.trim();
    var create_password = React.findDOMNode(this.refs.create_password).value.trim();
    var confirm_password = React.findDOMNode(this.refs.confirm_password).value.trim();
    var user_DOB = React.findDOMNode(this.refs.DOB).value.trim();
    if(!username || !email ||!paasword ) {
      this.setState({ "Notice": "Please Enter Your Details"})
    }
    //for sending data for verification from database
    //this.props.onCommentSubmit({ user: username, mailId: email, password: password});

    React.findDOMNode(this.refs.username).value = '';
    React.findDOMNode(this.refs.mail_address).value = '';
    React.findDOMNode(this.refs.password).value = '';
    return;
  };

  render() {
    return (
      <div>
        <div className='header'>
          <nav>
            <Link to="/home"><h3> Home </h3> </Link>
            <Link to="/log_in"><h3> LogIn </h3> </Link>
            <a href='#'><h3> About </h3> </a>
          </nav>
        </div>

        <div className="signUp">
          <form className='signUpForm' onSubmit= { this.handleSubmit }>
            <input type='text' placeholder='Enter Your Full Name' ref='username' />
            <input type='text' placeholder='Enter Your Date Of Birth' ref='user_DOB' />
            <input type='email' placeholder='a@b.xyz' ref='mail_address' />
            <input type='password' placeholder="Enter Your Password" ref='create_password' />
            <input type='password' placeholder="Enter Your Password again" ref='confirm_password' />
            <input type='submit' value= 'SignUp' />
          </form>
        </div>
     </div>
    );
  }
}
