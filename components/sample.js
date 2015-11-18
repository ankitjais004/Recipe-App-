import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {"msg":""};
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(){
    this.setState({
      msg: "welcome"
    })
  };

  render(){
    return(
      <div className="container">
        <div className="show">{this.state.msg}</div>
        <div className="container"> Hello OLA
          <input type="button" onClick={this.handleClick} value="Click Me"/>
        </div>
      </div>
    )
  }
}
var el = document.createElement("div")
document.body.appendChild(el);
ReactDOM.render(<Home />,el);






// import React from "react";
// import ReactDOM from 'react-dom';

// var App = React.createClass({
//   getInitialState: function(){
//     return{
//       "msg": ""
//     }
//   },
//   handleClick: function(){
//     this.setState({msg: "welcome"})
//   },

//   render: function(){
//     return(
//       <div>
//         <div className="show">{this.state.msg}</div>
//         <div className="container"> Hello OLA
//         <input type="button" onClick={this.handleClick} value="Click Me"/>
//         </div>
//       </div>
//     )
//   }
// })

// var el = document.createElement("div")
// document.body.appendChild(el);
// ReactDOM.render(<App />,el);
