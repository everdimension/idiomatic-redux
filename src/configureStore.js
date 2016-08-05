import { createStore } from 'redux';
import appState from './reducers/state';

function addLoggingToStore(store) {
  /* eslint-disable no-console */
  if (!console.group) {
    return store.dispatch;
  }
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const result = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return result;
  };
  /* eslint-enable no-console */
}

export default function configureStore() {
  const store = createStore(appState);

  store.dispatch = addLoggingToStore(store);

  return store;
}
