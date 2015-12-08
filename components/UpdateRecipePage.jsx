import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {updateRecipe} from "../actions/actions.js";

class UpdateRecipePage extends React.Component {
    constructor(props, context){
        super(props, context);
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
        var RecipeID = this.props.params.recipeID;
        var BrandId = 1;

        ReactDOM.findDOMNode(this.refs.recipeName).value = '';
        ReactDOM.findDOMNode(this.refs.recipeType).value = '';
        ReactDOM.findDOMNode(this.refs.recipeIngredients).value = '';
        ReactDOM.findDOMNode(this.refs.recipeProcess).value = '';
        ReactDOM.findDOMNode(this.refs.recipeNote).value = '';

        var recipeData = {
            UserId,
            RecipeID,
            RecipeName,
            BrandId,
            //RecipeType,
            //RecipeIngredients,
            RecipeProcess,
            RecipeNote
        };
        this.props.dispatch(updateRecipe(recipeData)).then(() => this.context.history.pushState(null, '/UserPage'));
    };

    render(){

        var Recipe = this.props.recipes[this.props.params.index];
        return(
            <div className="createRecipeFormHolder">
              <form className="createRecipe" onSubmit={ this.handleSubmit }>

                Recipe Name : &nbsp;
                <input type="text" defaultValue={Recipe.RecipeName} ref="recipeName"/>

                <p> Recipe type : &nbsp;
                  <input type="text" placeholder="e.g Desserts, Snacks, etc"ref="recipeType"/>
                </p>


                <p>Ingredients required:  &nbsp;
                  <textarea rows="3" cols="55" ref="recipeIngredients" placeholder="Ingredients required"></textarea>
                </p>

                <p>Direction : &nbsp;
                  <textarea rows="5" cols="55" ref="recipeProcess" defaultValue={Recipe.RecipeProcess}></textarea>
                </p>

                <p><b>Note: </b>  &nbsp;
                  <textarea rows="5" cols="55" ref="recipeNote" placeholder="Provide more things about your recipe"></textarea>
                </p>
                <p><input type="submit" value="Update Recipe" /></p>
              </form>
            </div>

        )
    }
}

UpdateRecipePage.contextTypes = {
    history: React.PropTypes.object
};

function select(state) {
    return {
        recipes: state.recipes,
        user: state.user[0]
    }
}
export default connect(select)(UpdateRecipePage)
