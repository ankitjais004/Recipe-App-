import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";

import {connect} from "react-redux";
class ShowRecipe extends React.Component {

  render() {
    const {recipes} = this.props;
    var Recipe = recipes[this.props.params.recipeId];
    return(
      <div>
      <div className="backToUserPage">
      <Link to="/UserPage"> <b> Back </b> </Link>|
      <Link to="/UpdatePage/"><b> edit </b> </Link>

      </div>
      <h1> {Recipe.RecipeName}  </h1>
      <p><b> Recipe ID : </b>
      {Recipe.RecipeID} </p>
      <p><b> Description : </b>
      {Recipe.RecipeProcess} </p>

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
