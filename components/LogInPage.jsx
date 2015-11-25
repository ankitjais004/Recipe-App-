import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { checkButton } from "../actions/actions.js"
import Router , { Link , Route , RouteHandler , Redirect } from "react-router";


class LogInPage extends React.Component {
    constructor(props){
        super(props);
        this.state = { "NoticeBoard" : "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        var email = ReactDOM.findDOMNode(this.refs.mailAddress).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
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
    handleClick(e){
        var buttonClickValue = ReactDOM.findDOMNode(this.refs.abc).value.trim();
       // console.log(buttonClickValue);
        this.props.dispatch(checkButton(buttonClickValue))
    }

    render() {
        const { checkButton } = this.props
        console.log(checkButton);
        return (
            <div>
              <div className="homeLoginSignUpHeader">
                <nav className="headerLinkOptions">
                  <Link to="/home"> <b> Home </b> </Link> &nbsp; &nbsp;
                  <Link to="/SignUpPage"> <b> Sign Up </b> </Link> &nbsp; &nbsp;
                  <a href='#'><b> About </b> </a>
                </nav>
              </div>


              <div className="checkButton">
                <input type="text" placeholder="Enter anything" ref="abc" />
                <button onClick={this.handleClick}> Click!! </button>
                 {checkButton}
              </div>


              <div className="logInFormHolder">
                <form className='LoginForm' onSubmit= { this.handleSubmit }>
                  <div className="noticeBoard">{ this.state.NoticeBoard }</div>
                  <label> Enter Your Email address </label> <br/>
                  <p><input type='email' placeholder='a@b.xyz' ref='mailAddress' /> </p>
                  <label> Enter Your Password </label> <br/>
                  <input type='password' placeholder="***********" ref='password' /><br/>
                  <p><Link to="/ForgetPassword"> Forgot password? </Link></p>
                  <p><input type='submit' value= 'LogIn' /></p>
                </form>
              </div>
            </div>
        );
    }
}
function select(state) {
    //console.log(state)
  return {
    checkButton: state.checkButton.text
  }
}

export default connect(select)(LogInPage)
