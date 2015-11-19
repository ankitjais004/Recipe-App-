import React from "react";

export default class ForgetPassword extends React.Component{
  constructor(props){
    super(props);
    this.state = {"NoticeBoard" : ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    var email = React.findDOMNode(this.refs.mailAddress).value.trim();
    //check the existance of this mail id
  };

  render(){
    return(
      <div>
        <form className="forgetPasswordForm" onSubmit={ this.handleSubmit }>
           <div className="notice_board">{ this.state.NoticeBoard }</div>
           <label> Enter your registered email address </label>
           <input type="email" placeholder="a@b.xyz" ref="mailAddress" /><br/>
           <input type="button" value="Reset Password" />
        </form>
      </div>
    )
  }
}
