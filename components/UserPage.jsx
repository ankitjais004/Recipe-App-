import React from "react";
import ReactDOM from "react-dom";

import CreatingRecipe from "./CreatingRecipe.jsx";
import RecipeList from "./RecipeList.jsx";

export default class UserPage extends React.Component {
  constructor(props){
    super(props);
    this.state = ({'flag': 2} , { "RecipeBox" : [] } );
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleClick() {
    this.setState({ flag : this.state.flag + 1 });
    this.setState({ showForm : 1 });
  };

  handleSubmit(RecipeName) {
    var newBox = this.state.RecipeBox.slice();
    newBox.push(RecipeName);
    this.setState({RecipeBox: newBox})
  };

  render() {
    var createRecipe;
    if( this.state.flag % 2 === 1){
      createRecipe =   <CreatingRecipe />
      //document.querySelector("#createRecipeButton").val = "Dismiss Recipe";
    }
    //else if( this.state.flag % 2 === 0){
     // createRecipe = null;
//      document.querySelector(".RecipeList").innerHTML = "Create New Recipe";
    //}

    return (
      <div>
        <span id="headings"><h1> Welcome to Your Profile </h1></span>
        <div className="RecipeList">
          <RecipeList RecipeItems = {this.state.RecipeBox} />
        </div>
        <div className="createRecipeButtonAndFormBinder">
        <input type="button" onClick= { this.handleClick } value="Create New Recipe" id="createRecipeButton" />
        { createRecipe }
        </div>
      </div>
    );
  }
}
