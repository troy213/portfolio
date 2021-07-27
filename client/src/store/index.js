import { createStore } from 'redux'

const initialState = {
  theme: 'light',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      if (action.payload === 'light') {
        return Object.assign({}, state, { theme: 'dark' })
      } else {
        return Object.assign({}, state, { theme: 'light' })
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
