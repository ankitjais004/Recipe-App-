import React from 'react';
import {Link} from "react-router";
import {searchIndex} from "../actions/actions.js"
export default class Recipe extends React.Component {

    render() {
        console.log(this.props.position);
        return(
            <div>
              <li> <Link to={"/ShowRecipe/"+this.props.position}> {this.props.item.RecipeName} </Link> </li>
              {this.props.children}
            </div>

        )
    }
}
