import React from "react";
import ReactDOM from "react-dom";

import CreatingRecipe from "./CreatingRecipe.jsx";

export default class UserPage extends React.Component {
  constructor(props){
    super(props);
    this.state = ({'flag': 0})
      this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState({ flag : 1 });
  };

  render() {
    if(this.state.flag === 1){
      var createRecipe =   <CreatingRecipe />
    }

    return (
      <div>
        <span id="headings"><h1> Welcome to Your Profile </h1></span>
        <div className="RecipeList"></div>
        <div className="createRecipeButtonAndFormBinder">
        <input type="button" onClick= { this.handleClick } value="Create New Recipe" id="creatRecipeButton" />
        { createRecipe }
        </div>
      </div>
    );
  }
}
