import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";

import {connect} from "react-redux";
class ShowRecipe extends React.Component {
  componentWillMount(){

  }
  render() {
    const {recipes} = this.props;
    var Recipe = recipes[this.props.params.recipeId];
    return(
      <div>
      <div className="backToUserPage">
      <Link to="/UserPage"> <b> Back </b> </Link>
      </div>
      <h1> {Recipe.RecipeName}  </h1>
      <p><b> Recipe Type : </b>
      {Recipe.RecipeType} </p>
      <p><b> Ingredients Required : </b>
      {Recipe.RecipeIngredients} </p>
      <p><b> Process : </b>
      {Recipe.RecipeProcess} </p>
      <p><b> Note: </b>
      {Recipe.RecipeNote} </p>
      </div>

    )
  }
}
function select(state) {
  return {
    recipes: state.recipes
  }
}
export default connect(select)(ShowRecipe)
