import {ADD_SESSION, TOGGLE_SESSION} from './Types'

/* Action Creator */

let nextId = 0
export const addSession= (text) => ({
  type: ADD_SESSION,
  id: nextId++,
  text
})

export const toggleSession = (id) => ({
  type: TOGGLE_SESSION,
  id
})
