import {ADD_TODO, TOGGLE_TODO} from './Types'

/* Action Creator */

let nextId = 0
export const addToDo = (text) => ({
  type: ADD_TODO,
  id: nextId++,
  text
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})
