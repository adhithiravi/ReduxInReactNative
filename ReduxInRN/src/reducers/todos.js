

/* TODO Reducer */
const todos = (state=[], action) => {
    switch (action.type) {
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? { ... todo, completed: !todo.completed } : todo)
      case 'ADD_TODO':
        return [
          ... state, {
              id: action.id,
              text: action.text,
              completed: false
          }
        ]
      default:
        return state
    }
}

export default todos
