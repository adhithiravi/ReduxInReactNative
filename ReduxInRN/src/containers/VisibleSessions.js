import {connect} from 'react-redux'
import SessionList from '../components/SessionList'
import {toggleSession} from '../actions'

const mapStateToProps = state => ({
  sessions: state.sessions
})

const mapDispatchToProps = dispatch => ({
  toggleSession: id => dispatch(toggleSession(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionList)
