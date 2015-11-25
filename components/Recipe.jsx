import React from 'react';

export default class Recipe extends React.Component {
    render() {
        return(
            <div>
            <li> <a href="#"> {this.props.item.RecipeName} </a> </li>

            </div>

        )
    }
}
