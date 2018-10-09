
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
        return state.map(todo =>
          (todo.id === action.id)
            ? { ... todo, completed: !todo.completed } : todo)

      default:
        return state
    }
}

export default sessions
