import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import RootComponent from './RootComponent';

const store = configureStore();

ReactDOM.render(
  <RootComponent store={store} />,
  document.getElementById('app')
);
