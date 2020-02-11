import { combineReducers } from 'redux'
import { userListReducer } from './adminPanel/reducer'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  userList: userListReducer,
  form: formReducer
})