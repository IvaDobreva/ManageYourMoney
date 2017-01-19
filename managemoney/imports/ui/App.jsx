import React, { Component } from 'react';

import Task from './Task.jsx';

//App component represents the whoe app
export default class App extends Component {
  getTasks() {
    return [
      {_id: 1, text: 'Task 1'}.
      {_id: 2, text: 'Task 2'},
      {_id: 1, text: 'Task 3'},
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
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