import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

const propTypes = {
  store: PropTypes.object.isRequired,
};

function RootComponent({ store }) {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/(:filter)" component={App} />
      </Router>
    </Provider>
  );
}

RootComponent.propTypes = propTypes;

export default RootComponent;
