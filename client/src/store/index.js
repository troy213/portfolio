import { createStore } from 'redux'

const initialState = {
  theme: 'light',
  modalValue: '',
  isLoading: true,
  isError: false,
  data: {
    experiences: [],
    skills: [],
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      if (action.payload === 'light') {
        return Object.assign({}, state, { theme: 'dark' })
      } else {
        return Object.assign({}, state, { theme: 'light' })
      }
    case 'CHANGE_MODAL_VALUE':
      return Object.assign({}, state, { modalValue: action.payload })
    case 'SET_LOADING':
      return Object.assign({}, state, { isLoading: action.payload })
    case 'SET_ERROR':
      return Object.assign({}, state, { isError: action.payload })
    case 'SET_DATA':
      return Object.assign({}, state, { data: action.payload })
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
