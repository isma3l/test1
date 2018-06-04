import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
// import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers';
import rootSaga from '../sagas';

const history = createHistory();
const router = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ ...reducers, router: routerReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, router)
  // , applyMiddleware(router, thunkMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
export { history };

