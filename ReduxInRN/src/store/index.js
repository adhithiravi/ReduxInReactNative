import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export default store = createStore(rootReducer)
