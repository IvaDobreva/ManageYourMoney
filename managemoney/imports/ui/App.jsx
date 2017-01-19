import React, { Component, PropTypes } from 'react';
import { createConstainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

//App component represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.tasks.map( (task) => (
      <Task key={task._id} task = {task} />
    ));
  }

  render() {
    return (
      <div className = "container">
          <header>
            <h1> Todo eefsf </h1>
          </header>

          <ul>
            (this.renderTasks())
          </ul>
        </div>
    );
  }
}

App.PropTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createConstainer( () => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);
