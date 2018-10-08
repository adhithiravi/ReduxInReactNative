import {connect} from 'react-redux'
import ToDoList from '../components/ToDoList'
import {toggleTodo} from '../actions'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
