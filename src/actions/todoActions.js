import { v4 } from 'node-uuid';

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text,
    id: v4(),
  };
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id,
  };
}

export function completeTodo(id) {
  return {
    type: 'COMPLETE_TODO',
    id,
  };
}

export function unCompleteTodo(id) {
  return {
    type: 'UNCOMPLETE_TODO',
    id,
  };
}

export function receiveTodos(filter, todos) {
  return {
    type: 'RECEIVE_TODOS',
    filter,
    todos,
  };
}
