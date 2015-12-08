import React from 'react';
import {Link} from "react-router";
import {searchIndex} from "../actions/actions.js";
import {connect} from "react-redux";

class Recipe extends React.Component {
    render() {
        return(
            <div>
              <li> <Link to={"/UpdateRecipePage/"+this.props.item.RecipeID +"/"+ this.props.position}> {this.props.item.RecipeName} </Link> </li>
              {this.props.children}
            </div>

        )
    }
}
function select(state) {
  return {
    recipes: state.recipes
  }
}
export default connect(select)(Recipe)
