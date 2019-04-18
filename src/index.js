import './assets/style.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);
