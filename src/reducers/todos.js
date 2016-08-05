import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import todo from './todo';

function byId(state = {}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        [action.id]: todo(undefined, action),
      });
    case 'COMPLETE_TODO':
    case 'UNCOMPLETE_TODO':
      return Object.assign({}, state, {
        [action.id]: todo(state[action.id], action),
      });
    case 'REMOVE_TODO':
      return omit(state, action.id);

    default:
      return state;
  }
}

function allIds(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.id,
      ];

    case 'REMOVE_TODO':
      return state.filter(id => id !== action.id);

    default:
      return state;
  }
}

export default combineReducers({
  byId,
  allIds,
});

export function getVisibleTodos(state, filter) {
  const todos = state.allIds.map(id => state.byId[id]);
  if (filter === 'completed') {
    return todos.filter(item => item.completed);
  }
  if (filter === 'active') {
    return todos.filter(item => !item.completed);
  }
  return todos;
}
