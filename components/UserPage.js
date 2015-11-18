import React from "react";
import ReactDOM from "react-dom";

export default class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForgot = this.handleForgot.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    var email = React.findDOMNode(this.refs.mail).value.trim();
    var password = React.findDOMNode(this.refs.pass).value.trim();
    if(!email || !Password) {
      return;
    }
    //for sending data for verification from database
    this.props.onCommentSubmit({ mailId: email, password: pass});
  }
  handleForgot(e){
    // code for forgot password
  }
  render() {
    return (
      <div className= LoginForm>
      <form className='Login' onSubmit= {e => this.handleSubmit(e)}>
        <input type='text' placeholder='Enter Your email' ref='mail' />
        <input type='password' placeholder="Enter Your Password" ref='pass' />
        <a href="#" className='forgot' onclick= {e => this.handleForgot(e)} > Forgot password />
        <input type='submit' value= 'LogIn' />
        </form>
    );
  }
}
