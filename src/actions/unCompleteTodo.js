export default function unCompleteTodo(id) {
  return {
    type: 'UNCOMPLETE_TODO',
    id,
  };
}
