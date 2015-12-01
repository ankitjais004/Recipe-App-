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
      this.setState({Button: "Done with creating recipe"});
    else
      this.setState({Button: "Create New Recipe"})
  };

  changeState(){
    this.setState({submit: true})
  };

  render() {
    const {dispatch, recipes, logIn} = this.props;
    var NoList = '';
    if (recipes.length === 0 )
      NoList = "Oopss no recipe";

    return (
      <div>
        <div className="headerLinkOptions">
          <Link to="/home"> <b> LogOut </b> </Link>
        </div>
        <span id="header"><h1> Welcome to Your Profile {logIn.userName} </h1></span>
        <div className="RecipeList">
          <RecipeList RecipeItems = {recipes} />
          {NoList}
        </div>
        <div className="createRecipeButtonAndFormBinder">
          <input type="button" onClick= {this.handleClick } value={this.state.Button} id="createRecipeButton" ref="createRecipeButtonRef" />
          {this.state.flag % 2 == 1 ? <CreatingRecipe onSubmitRecipe = {recipeData => dispatch(addRecipe(recipeData))}/> : null }
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    recipes: state.recipes,
    logIn: state.logIn[0]
  }
}

export default connect(select)(UserPage)
