import {combineReducers} from 'redux'
import sessions from './sessions'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    sessions,
    visibilityFilter
})
