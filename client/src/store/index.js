import { createStore } from 'redux'

const initialState = {
  theme: 'light',
  modalValue: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      if (action.payload === 'light') {
        return Object.assign({}, state, { theme: 'dark' })
      } else {
        return Object.assign({}, state, { theme: 'light' })
      }
    case 'CHANGE_MODAL_VALUE':
      return Object.assign({}, state, { modalValue: action.payload })
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
