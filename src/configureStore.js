import { createStore } from 'redux';
import { loadState, persistState } from './localStorage';
import appState from './reducers/state';

export default function configureStore() {
  const store = createStore(appState, loadState());

  store.subscribe(() => {
    persistState({
      todos: store.getState().todos,
    });
  });

  return store;
}
