import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import clients from './clients'

export default combineReducers({
  router: routerReducer,
  clients
})
