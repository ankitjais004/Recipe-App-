import React from "react";
import ReactDOM from "react-dom";

import Recipe from "./Recipe.jsx"

export default class RecipeList extends React.Component {
  render() {
    var items = this.props.RecipeItems;
    return(
      <div>
        <h2> Your Recipes: </h2>
        <ul> {items.map((recipe, index) =>
              <Recipe item={recipe} key = {index} />
              )}
        </ul>
      </div>
    )

  }
}
