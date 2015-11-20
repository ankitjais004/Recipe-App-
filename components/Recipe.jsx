import React from 'react';

export default class Recipe extends React.Component {
  render() {
    return(
      <li> {this.props.item}
      </li>
    )
  }
}
