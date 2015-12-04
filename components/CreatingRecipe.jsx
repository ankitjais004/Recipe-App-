import React from "react";
import ReactDOM from "react-dom";

import {connect} from "react-redux";
import {addRecipe} from "../actions/actions.js";

class CreatingRecipe extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    var RecipeName = ReactDOM.findDOMNode(this.refs.recipeName).value;
    var RecipeType = ReactDOM.findDOMNode(this.refs.recipeType).value;
    var RecipeIngredients = ReactDOM.findDOMNode(this.refs.recipeIngredients).value;
    var RecipeProcess = ReactDOM.findDOMNode(this.refs.recipeProcess).value;
    var RecipeNote = ReactDOM.findDOMNode(this.refs.recipeNote).value;
    var UserId = this.props.user.id;
    var BrandId = 1;

    ReactDOM.findDOMNode(this.refs.recipeName).value = '';
    ReactDOM.findDOMNode(this.refs.recipeType).value = '';
    ReactDOM.findDOMNode(this.refs.recipeIngredients).value = '';
    ReactDOM.findDOMNode(this.refs.recipeProcess).value = '';
    ReactDOM.findDOMNode(this.refs.recipeNote).value = '';

    var recipeData = {
      UserId,
      RecipeName,
      BrandId,
      //RecipeType,
      //RecipeIngredients,
      RecipeProcess,
      RecipeNote
    };
    this.props.dispatch(addRecipe(recipeData));
  };

  render(){
    return(
      <div className="createRecipeFormHolder">
        <form className="createRecipe" onSubmit={ this.handleSubmit }>

          Recipe Name : &nbsp;
          <input type="text" placeholder="Recipe Name"ref="recipeName"/>

          <p> Recipe type : &nbsp;
            <input type="text" placeholder="e.g Desserts, Snacks, etc"ref="recipeType"/>
          </p>


          <p>Ingredients required:  &nbsp;
            <textarea rows="3" cols="55" ref="recipeIngredients" placeholder="Ingredients required"></textarea>
          </p>

          <p>Direction : &nbsp;
            <textarea rows="5" cols="55" ref="recipeProcess" placeholder="Enter you recipe process here"></textarea>
          </p>

          <p><b>Note: </b>  &nbsp;
            <textarea rows="5" cols="55" ref="recipeNote" placeholder="Provide more things about your recipe"></textarea>
          </p>
          <p><input type="submit" value="Create Recipe" /></p>
        </form>
      </div>

    )
  }
};

function select(state) {
  return {
    recipes: state.recipes,
    user: state.user[0]
  }
}
 export default connect(select)(CreatingRecipe)
