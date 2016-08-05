import { v4 } from 'node-uuid';

const fakeDatabase = {
  todos: [
    {
      text: 'ibe',
      completed: true,
      id: v4(),
    },
    {
      text: 'tw',
      completed: true,
      id: v4(),
    },
    {
      text: 'hey ',
      completed: false,
      id: v4(),
    },
    {
      text: 'newww',
      completed: false,
      id: v4(),
    },
    {
      text: 'Important todo',
      completed: false,
      id: v4(),
    },
    {
      text: 'Watch something!',
      completed: false,
      id: v4(),
    },
  ],
};

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const filteredTodo = {
  all: t => t,
  completed: t => t.completed,
  active: t => !t.completed,
};

export function fetchTodos(filter = 'all') {
  return delay(1000).then(
    () => fakeDatabase.todos.filter(todo => filteredTodo[filter](todo))
  );
}
