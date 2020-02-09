import { combineReducers } from 'redux';
import { reducer } from './adminPanel/reducer';
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  addUserPage: reducer,
  form: formReducer
})