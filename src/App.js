import React from 'react'
import {Switch, Route} from 'react-router-dom'

import { useDispatch, } from 'react-redux'
import {login} from './actions'

import HomePage from './pages/home'
import Login from './pages/login'
import UsersDahboard from './pages/dashboard'


export default function App() {

  const dispatch = useDispatch()
  
  React.useEffect(() => {
    const username = localStorage.getItem('username')
    const objUsername = {username}
    if (username !== null) {
      dispatch(login(objUsername))
    }
  }, [])
  return (
    <div>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/dashboard' component={UsersDahboard}/>
      </Switch>
    </div>
  )
}