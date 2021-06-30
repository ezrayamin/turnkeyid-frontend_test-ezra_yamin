import Axios from 'axios'

export const getData = () => {
    return async(dispatch) => {
        try {
            const result = await Axios.get('http://localhost:2000/users')
            
            dispatch({
                type: 'GET_USERS_DATA',
                payload: result.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const addData = (data) => {
    return async(dispatch) => {
        try {
            const add = await Axios.post('http://localhost:2000/users', data)
            const result = await Axios.get('http://localhost:2000/users')
            
            dispatch({
                type: 'GET_USERS_DATA',
                payload: result.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const editData = (data) => {
    return async(dispatch) => {
        try {
            const edit = await Axios.patch(`http://localhost:2000/users/${data.id}`, data)
            const result = await Axios.get('http://localhost:2000/users')

            dispatch({
                type: 'GET_USERS_DATA',
                payload: result.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const deleteData = (id, data) => {
    return async(dispatch) => {
        try {
            const del = await Axios.delete(`http://localhost:2000/users/${id}`)
            const result = await Axios.get('http://localhost:2000/users')

            dispatch({
                type: 'GET_USERS_DATA',
                payload: result.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}