import React, { PropTypes } from 'react';

const propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired,
  unCompleteTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

class Todo extends React.Component {
  constructor() {
    super();
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  toggleTodo() {
    const { todo } = this.props;
    if (todo.completed) {
      this.props.unCompleteTodo(todo.id);
    } else {
      this.props.completeTodo(todo.id);
    }
  }

  removeTodo() {
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : null,
          }}
        >
          {todo.text}
        </span>

        {' '}
        <button onClick={this.toggleTodo}>toggle</button>
        {' '}
        <button onClick={this.removeTodo}>remove</button>
      </li>
    );
  }
}

Todo.propTypes = propTypes;

export default Todo;
