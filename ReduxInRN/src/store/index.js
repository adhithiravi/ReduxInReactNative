import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  // other store enhancers if any
);

export default store = createStore(rootReducer, enhancer)
