import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return (
      <ul>
        <li className="TodoItem">
           <strong>{this.props.todo.title}</strong>
        </li>
      </ul>
    );
  }
}
//Validation
TodoItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default TodoItem;
