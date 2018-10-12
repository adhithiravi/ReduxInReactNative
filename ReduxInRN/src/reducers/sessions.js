
/* Session Checklist  Reducer */
const sessions = (state=[], action) => {
    switch (action.type) {

      case 'ADD_SESSION':
        return [
          ... state, {
              id: action.id,
              text: action.text,
              completed: false
          }
        ]

      case 'TOGGLE_SESSION':
        return state.map(session =>
          (session.id === action.id)
            ? { ... session, completed: !session.completed } : session)

      default:
        return state
    }
}

export default sessions
