import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {login} from '../actions'
import '../css/login.css'

const LoginBox = () => {
    const [loginForm, setLoginForm] = React.useState({
        username: '',
        passowrd: ''
    })
    const [toHome, setToHome] = React.useState(false)
    const [visible, setVisible] = React.useState(false)

    const dispatch = useDispatch()

    const confirmLogin = () => {
        const usernameLogin = loginForm.username
        dispatch(login({usernameLogin}))
        setToHome(true)
    }

    if (toHome) return <Redirect to="/" />

    return (
        <div className="centered-form">
            <div className="login-form">
                <InputGroup className="username-input">
                    <FormControl
                        className="username-form"
                        placeholder="username"
                        type="text"
                        value={loginForm.username}
                        onChange={e => setLoginForm({
                            ...loginForm, username: e.target.value
                        })
                        }
                    />
                    <InputGroup.Append >
                        <InputGroup.Text className="form-icon">
                            <i className="fas fa-user" ></i>
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup>
                    <FormControl
                        placeholder="Passowrd"
                        value={loginForm.passowrd}
                        onChange={e => {
                            setLoginForm({
                                ...loginForm, passowrd: e.target.value
                            })
                        }}
                        type={visible ? "text" : "password"}
                    />
                    <InputGroup.Append style={{ backgroundColor: 'white' }}>
                        <InputGroup.Text className="clickable-icon" onClick={() => setVisible(!visible)}>
                            <i className={visible ? "fas fa-eye" : "fas fa-eye-slash"} ></i>
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                <button onClick={confirmLogin} className="login-button">
                    Continue
                </button>
            </div>
            <div className="center-form">
                <h1>/</h1>
            </div>
            <div className="auto-logins">
                <button className="auto-login-button"><i className="fab fa-google" id="icon-google"></i>  Sign in with Google</button>
                <button className="auto-login-button"><i className="fab fa-facebook-f" id="icon-facebook"></i>  Sign in with Facebook</button>
                <button className="auto-login-button"><i className="fas fa-phone" id="icon-phone"></i>  Sign in with SMS</button>
            </div>
        </div>
    )
}

export default LoginBox