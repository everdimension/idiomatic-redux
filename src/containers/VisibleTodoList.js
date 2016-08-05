import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchTodos } from '../backend';
import * as todoActions from '../actions/todoActions';
import { getVisibleTodos } from '../reducers/todos';
import TodoList from '../components/TodoList';

const propTypes = {
  filter: PropTypes.string,
  receiveTodos: PropTypes.func.isRequired,
};

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { filter } = this.props;
    if (filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, receiveTodos } = this.props;
    fetchTodos(filter).then(todos =>
      receiveTodos(filter, todos)
    );
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

VisibleTodoList.propTypes = propTypes;

export default withRouter(connect(
  (state, ownProps) => {
    const filter = ownProps.params.filter || 'all';
    return {
      filter,
      todos: getVisibleTodos(state.todos, filter),
    };
  },
  todoActions
)(VisibleTodoList));
