export function loadState() {
  try {
    const savedState = localStorage.getItem('todos');
    if (savedState) {
      return JSON.parse(savedState);
    }
    return undefined;
  } catch (e) {
    return undefined;
  }
}

export function persistState(state) {
  localStorage.setItem('todos', JSON.stringify(state));
}
