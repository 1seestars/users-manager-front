import { SET_USERS, REMOVE_ITEM, REMOVE_ALL_ITEMS, SET_LOADING, SET_ERROR } from './actions'

export const userListReducer = (state = { users: [], isLoading: false, networkError: '' }, action) => {
    switch(action.type){
        case SET_USERS:
            return {...state, users: action.payload}
        case REMOVE_ITEM:
            return {...state, users: state.users.filter(elem => elem.id !== action.payload)}
        case REMOVE_ALL_ITEMS:
            return {...state, users: []}
        case SET_LOADING:
            return {...state, isLoading: action.payload}
        case SET_ERROR:
            return {...state, networkError: action.payload}
        default: return state
    }
}