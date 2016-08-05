import React, { PropTypes } from 'react';
import Todo from './Todo';

const propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
  unCompleteTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

function TodoList({ todos, completeTodo, unCompleteTodo, removeTodo }) {
  return (
    <div>
      visible todos
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            unCompleteTodo={unCompleteTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = propTypes;

export default TodoList;
