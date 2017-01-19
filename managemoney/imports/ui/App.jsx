import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createConstainer } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

//App component represents the whole app
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    //Find the text field via react ref
    const text = ReactDOM.findDOMNode ( this.refs.textInput).value.trim();

    Tasks.insert({
      text,
      createdAt: new Date(), //curent time
    });

    //Clear form
    ReactDOM.findDOMNode (this.refs.textInput).value = '';
  }

  renderTasks() {
    return this.props.tasks.map( (task) => (
      <Task key={task._id} task = {task} />
    ));
  }

  render() {
    return (
      <div className = "container">
          <header>
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form>
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
