import React from "react";
import ReactDOM from "react-dom";

export default class CreatingRecipe extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();

    var RecipeName = ReactDOM.findDOMNode(this.refs.recipeName).value;
    var RecipeIngredients = ReactDOM.findDOMNode(this.refs.recipeIngredients).value;
    var RecipeProcess = ReactDOM.findDOMNode(this.refs.recipeProcess).value;
    var RecipeIsGoodFor = this.getGoodForPeople();
    console.log("Recipe name",RecipeName);
    console.log("RecipeIngredients name",RecipeIngredients);
    console.log("Recipe process name",RecipeProcess);
    console.log("Recipe good for name",RecipeIsGoodFor);
  };

  getGoodForPeople(){
    var array = [];
    var checkbox = document.querySelector(".goodForPeople");
    for(var i = 0; i<checkbox.length; i++){
      if(checkbox[i].checked){
        array.push(checkbox[i].value);
        console.log(array);
      }
    }
    return array;
  };

  render(){
    return(
      <div className="createRecipeFormHolder">
        <form className="createRecipe" onSubmit={ this.handleSubmit }>

          Your Recipe Name : &nbsp;
          <input type="text" ref="recipeName"/>

          <p>Ingredients are required for your Recipe : &nbsp;
            <input type="text" ref="recipeIngredients" />
          </p>

          Your Recipe is good for : &nbsp;
          Children <input type="checkbox" className="goodForPeople" value="children" />
          Younger <input type="checkbox" className="goodForPeople" value="Younger" />
          Old <input type="checkbox" className="goodForPeople" value="Old" />
          For All <input type="checkbox" className="goodForPeople" value="For All" />

          <p>Process : &nbsp;
            <textarea rows="10" cols="50" ref="recipeProcess" placeholder="Enter you recipe process here"></textarea>
          </p>

          <b>! I have certain things to say...</b>
          <p><input type="submit" value="Create My Recipe" /></p>

        </form>
      </div>

    )
  }
};
