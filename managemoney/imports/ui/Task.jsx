import React, { Component, PropTypes } from 'react';

//Task component - represents a single to do list item
export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text} </li>
    );
  }
}

Task.PropTypes = {
  //this displays
  task: PropTypes.object.isRequired,
};
