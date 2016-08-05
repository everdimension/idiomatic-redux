const initialState = { text: '', completed: false };

export default function todo(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        id: action.id,
        text: action.text,
      });

    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        completed: true,
      });

    case 'UNCOMPLETE_TODO':
      return Object.assign({}, state, {
        completed: false,
      });
  }

  return state;
}
