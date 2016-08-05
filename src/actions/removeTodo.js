export default function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id,
  };
}
