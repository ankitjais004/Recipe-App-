import React , { Component } from "react";

export default class HelloMessage extends React.Component{
  render(){
    return(
      <div class="showing_msg">
        Hello
      </div>
    )
  }
}

React.render(<HelloMessage />, document.querySelector("body"));
