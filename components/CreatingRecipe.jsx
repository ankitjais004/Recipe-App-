import React from "react";
import ReactDOM from "react-dom";

export default class CreatingRecipe extends React.Component{

  constructor(props){
    super(props);
    this.state = ({ "details" : 0 });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getOtherDetails = this.getOtherDetails.bind(this);
    this.setOtherDetails = this.setOtherDetails.bind(this);
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
    this.props.onSubmitRecipe(RecipeName);
  };

  setOtherDetails(){
    this.setState({ details: 1 });
  };

  getOtherDetails(){
    if(this.state.details === 1){
      return ( <textarea rows="5" cols="55" ref="moreAboutRecipe" placeholder="Provide more things about your recipe"></textarea> );
    }else{
      return;
    }
  }

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
            <textarea rows="5" cols="55" ref="recipeProcess" placeholder="Enter you recipe process here"></textarea>
          </p>

          <div className="otherDetailsAboutRecipeDiv" onClick={ this.setOtherDetails }><b>! I have certain things to say... : &nbsp;</b> { this.getOtherDetails() }</div>
          <p><input type="submit" value="Create My Recipe" /></p>

        </form>
      </div>

    )
  }
};
