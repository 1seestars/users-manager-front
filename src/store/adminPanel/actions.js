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

export const fetchUsers = (url = 'http://localhost:4000/users', method = 'GET', values = null) => async dispatch => {
    try {
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(values)
        })
        const data = await response.json()
        if(!data.message) {
            dispatch(setUsers(data))
        }
    } catch (e) {
        dispatch(setError(e.message))
    } finally {
        dispatch(setLoading(false))
    }
}

// http://localhost:4000/user POST {"firstName":"jhbhjbjhb","lastName":"jhbjhb","email":"hjbjhb@jhbjhbec.cc","gender":"male","birthday":"2000/01/20","password":"pass12","passwordConfirmation":"pass12","workplaces":[{"enterprise":"gbjhbjhb","position":"jbhjhhj","years":"2005-2007"}]}

// http://localhost:4000/user POST {"firstName":"jhbjhbjhb","lastName":"jhbjhbj","email":"bjhbjhb@JHbhjb.cc","gender":"male","birthday":"2000/01/20","password":"pass12","passwordConfirmation":"pass12","workplaces":[{"enterprise":"hbkjbhkb","position":"jhbjhb","years":"2005-2007"}]} 