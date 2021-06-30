export const login = (form) => {
    return async (dispatch) => {
        try {
            console.log('action',form)
            console.log('action',form.username)
            await localStorage.setItem('username', form.usernameLogin)

            dispatch({ type: 'LOG_IN', payload: form.usernameLogin})
        } catch (err) {
            console.log(err)
        }
    }
}

export const logout = () => {
    return {
        type: 'LOG_OUT'
    }
}