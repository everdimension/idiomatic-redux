export default function completeTodo(id) {
  return {
    type: 'COMPLETE_TODO',
    id,
  };
}
