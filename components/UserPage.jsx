import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";

import CreatingRecipe from "./CreatingRecipe.jsx";
import RecipeList from "./RecipeList.jsx";
import {addRecipe} from "../actions/actions.js";
import {connect} from "react-redux";

export default class UserPage extends React.Component {
    constructor(props){
        super(props);
        this.state = ({ "flag": 2 , "Button": "Create New Recipe" });
        this.handleClick = this.handleClick.bind(this);

    };

    handleClick(e) {
        e.preventDefault();
        this.setState({ flag : this.state.flag + 1 });
        var elem = ReactDOM.findDOMNode(this.refs.createRecipeButtonRef).value;
        if(elem === "Create New Recipe")
        {
            this.setState({Button: "Cancel"})
        }
        else {
            this.setState({Button: "Create New Recipe"})
        }
    };
    render() {
        const {dispatch, recipes} = this.props;
        var createRecipe , NoList = '';
        if(this.state.flag % 2 === 1){
            createRecipe =   <CreatingRecipe onSubmitRecipe = {recipeData => dispatch(addRecipe(recipeData))} />

        };
        if (recipes.length === 0 ){
            NoList = "Empty List";
        }

        return (
            <div>
              <div className="headerLinkOptions">
                <Link to="/home"> <b> LogOut </b> </Link>
              </div>
              <span id="header"><h1> Welcome to Your Profile </h1></span>
              <div className="RecipeList">
                <RecipeList RecipeItems = {recipes} />
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
function select(state) {
    return {
        recipes: state.recipes
    }
}

export default connect(select)(UserPage)
