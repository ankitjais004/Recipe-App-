import  React from "react";
import ReactDOM from "react-dom";
//import { Provider } from "react-redux";

import Home from "./Home_Page.js";

class Index extends React.Component{
  render(){
    return <div className="homePageMergedOn"><Home /></div>
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Index />, app);
