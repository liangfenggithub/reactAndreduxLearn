import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers/index.js"
//引入自定义的saga文件
import watchAsynAction from "./saga"
//引入自定义的的中间件
import { timerMiddle, helloMiddle, logMiddle } from "./middleWare"
//引入saga
import createSagaMiddleware from "redux-saga"


//创建saga中间件
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  reducer,
  applyMiddleware(
    helloMiddle,
    logMiddle,
    timerMiddle,
    sagaMiddleware //saga中间件
  )
)
sagaMiddleware.run(watchAsynAction)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
