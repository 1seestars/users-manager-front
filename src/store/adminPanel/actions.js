import { apiCall } from '../../utils/backendApi'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS'
export const SET_USERS = 'SET_USERS'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'

export const removeItem = id => ({type: REMOVE_ITEM, payload: id})
export const removeAllItems = () => ({ type: REMOVE_ALL_ITEMS })
export const setUsers = data => ({ type: SET_USERS, payload: data })
export const setLoading = value => ({ type: SET_LOADING, payload: value })
export const setError = message => ({ type: SET_ERROR, payload: message })

export const fetchUsers = () => async dispatch => {
    try {
        dispatch(setLoading(true))
        const data = await apiCall('users', 'GET')
        dispatch(setUsers(data))
    } catch (e) {
        dispatch(setError('Failed to load user list'))
    } finally {
        dispatch(setLoading(false))
    }
}

export const addUser = body => async dispatch => {
    try {
        dispatch(setLoading(true))
        await apiCall('user', 'POST', body)
    } catch (e) {
        dispatch(setError('Error: something went wrong :-('))
    } finally {
        dispatch(setLoading(false))
    }
}

export const deleteUser = route => async dispatch => {
    try {
        await apiCall(route, 'DELETE')
        dispatch(setUsers(await apiCall('users', 'GET')))
    } catch (e) {
        dispatch(setError(e.message))
    } 
}

export const deleteAllUsers = () => async dispatch => {
    try {
        await apiCall('users', 'DELETE')
        dispatch(setUsers(await apiCall('users', 'GET')))
    } catch (e) {
        dispatch(setError(e.message))
    } 
}