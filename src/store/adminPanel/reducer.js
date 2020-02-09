import { SET_USERS, REMOVE_ITEM, REMOVE_ALL_ITEMS, SET_LOADING } from './actions'

export const reducer = (state = { users: [], isLoading: false, isUpdate: true }, action) => {
    switch(action.type){
        case SET_USERS:
            return {...state, users: action.payload}
        case REMOVE_ITEM:
            return {...state, users: state.users.filter(elem => elem.id !== action.payload)}
        case REMOVE_ALL_ITEMS:
            return {...state, users: []}
        case SET_LOADING:
            return {...state, isLoading: action.payload}
        default: return state
    }
}