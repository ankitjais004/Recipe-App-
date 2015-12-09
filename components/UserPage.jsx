import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";

import CreatingRecipe from "./CreatingRecipe.jsx";
import RecipeList from "./RecipeList.jsx";
import {addRecipe, logOut, recipes} from "../actions/actions.js";
import {connect} from "react-redux";

export default class UserPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = ({ "flag": 2 , "Button": "Create a personal Recipe" });
        this.handleClick = this.handleClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    };
    componentWillMount(){
        //debugger
        console.log(this.props.user)
           // this.props.dispatch(recipes(localStorage.id))
    }
g

    handleClick(e) {
        e.preventDefault();
        this.setState({ flag : this.state.flag + 1 });
        var elem = ReactDOM.findDOMNode(this.refs.createRecipeButtonRef).value;
        if(elem === "Create New Recipe")
            this.setState({Button: "Done with creating recipe"});
        else
            this.setState({Button: "Create a personal Recipe"})
    };

    changeState(){
        this.setState({submit: true})
    };

    handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem("id");
        localStorage.removeItem("userName");
        localStorage.removeItem("email");
        this.props.dispatch(logOut()).then(() => this.context.history.pushState(null, '/'))
    };

    render() {
        const {dispatch, recipes, user} = this.props;
        var NoList = '';
        if (recipes.length === 0 )
            NoList = <a href="#">Oopss no recipe </a>;

        if(!user) return null;
        return (
            <div>
              <div className="headerLinkOptions">
                <a href="#" onClick = {this.handleLogout}> LogOut </a>
              </div>
              <span id="header"><h1> WELCOME {user.userName} </h1></span>
              <div className="RecipeList">
                <RecipeList RecipeItems = {recipes} />
                {NoList}
              </div>
              <div className="createRecipeButtonAndFormBinder">
                <input type="button" onClick= {this.handleClick } value={this.state.Button} id="createRecipeButton" ref="createRecipeButtonRef" />
                {this.state.flag % 2 == 1 ? <CreatingRecipe /> : null }
              </div>
            </div>
        );
    }
}

UserPage.contextTypes = {
    history: React.PropTypes.object
};

function select(state) {
    return {
        recipes: state.recipes,
        user: state.user[0]
    }
}

export default connect(select)(UserPage)
