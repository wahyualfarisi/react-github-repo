import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './store/reducers';
import thunk from 'redux-thunk';

//composerEnhancers
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
let store = createStore( rootReducers );
if(composeEnhancers) {
  store = createStore( rootReducers, composeEnhancers(
    applyMiddleware( thunk )
    ) 
  );
}

if (process.env.NODE_ENV === "development"){
  const { worker } = require('./mocks/browser');
  worker.start({
    onUnhandledRequest: "bypass"
  });
}

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
