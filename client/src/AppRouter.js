import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/App'
import Axios from 'axios'
import { connect } from 'react-redux'

const AppRouter = (props) => {
  React.useEffect(() => {
    if (props.data.experiences.length === 0 || props.data.skills.length === 0) {
      Axios.get('https://tritera-erlangga-api.herokuapp.com/data').then(
        (res) => {
          if (res.data.success) {
            props.onSetData(res.data.result)
            props.onSetIsLoading(false)
          } else {
            props.onSetIsError(true)
            props.onSetIsLoading(false)
          }
        }
      )
    }
  }, [props])

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetIsLoading: (value) => {
      const action = { type: 'SET_LOADING', payload: value }
      dispatch(action)
    },
    onSetIsError: (value) => {
      const action = { type: 'SET_ERROR', payload: value }
      dispatch(action)
    },
    onSetData: (value) => {
      const action = { type: 'SET_DATA', payload: value }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)
