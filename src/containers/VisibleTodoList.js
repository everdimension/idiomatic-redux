import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import completeTodoAction from '../actions/completeTodo';
import unCompleteTodoAction from '../actions/unCompleteTodo';
import removeTodoAction from '../actions/removeTodo';
import { getVisibleTodos } from '../reducers/todos';
import TodoList from '../components/TodoList';

export default withRouter(connect(
  (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, ownProps.params.filter || 'all'),
  }),
  {
    completeTodo: completeTodoAction,
    unCompleteTodo: unCompleteTodoAction,
    removeTodo: removeTodoAction,
  }
)(TodoList));
