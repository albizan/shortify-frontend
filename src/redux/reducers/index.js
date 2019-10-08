import { combineReducers } from 'redux'

import { authReducer } from './auth.reducer'

const reducers = combineReducers({
  authState: authReducer,
})

export default reducers
