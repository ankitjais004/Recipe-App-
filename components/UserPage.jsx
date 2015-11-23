import React from "react";
import ReactDOM from "react-dom";

import CreatingRecipe from "./CreatingRecipe.jsx";
import RecipeList from "./RecipeList.jsx";

export default class UserPage extends React.Component {
  constructor(props){
    super(props);
    this.state = ({ 'flag': 2 , "RecipeBox" : [], "Button": "Create New Recipe" });
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleClick(e) {
    e.preventDefault();
    this.setState({ flag : this.state.flag + 1 });
    var elem = ReactDOM.findDOMNode(this.refs.createRecipeButtonRef).value;
    console.log(elem);
    if(elem === "Create New Recipe")
    {
      this.setState({Button: "Cancel"})
    }
    else {
      this.setState({Button: "Create New Recipe"})
    }
  };

  handleSubmit(RecipeName) {
    var newBox = this.state.RecipeBox.slice();
    newBox.push(RecipeName);

    this.setState({RecipeBox: newBox})

  };

  render() {
    var createRecipe , NoList = '';
    if( this.state.flag % 2 === 1){
      createRecipe =   <CreatingRecipe onSubmitRecipe = {RecipeName => this.handleSubmit(RecipeName)} />

    };
    if (this.state.RecipeBox.length === 0 ){
      NoList = "Empty List";
    }

    return (
      <div>
      <span id="header"><h1> Welcome to Your Profile </h1></span>
      <div className="RecipeList">
      <RecipeList RecipeItems = {this.state.RecipeBox} />
      {NoList}
      </div>
      <div className="createRecipeButtonAndFormBinder">
      <input type="button" onClick= {this.handleClick } value={this.state.Button} id="createRecipeButton" ref="createRecipeButtonRef" />
      { createRecipe }
      </div>
      </div>
    );
  }

}
