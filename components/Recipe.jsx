import React from 'react';

export default class Recipe extends React.Component {

  render() {
    return(
      <li> <a href="#"> {this.props.item} </a>
      </li>
    )
  }

}
