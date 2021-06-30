import React from 'react'
import { Image } from 'react-bootstrap'
import { LOGO } from '../asset'
import LoginBox from '../components/loginBox'
import '../css/login.css'

const Login = () => {
    return (
        <div className="login-body">
            <Image src={LOGO.default} alt='logo' className="logo-login" />
           <LoginBox/>
        </div >
    )
}

export default Login