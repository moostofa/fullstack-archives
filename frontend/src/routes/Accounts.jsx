import React from 'react'
import { useParams } from "react-router-dom"
import Login from '../components/accounts/Login'
import Profile from '../components/accounts/Profile'
import Register from '../components/accounts/Register'

const routes = {
    profile: <Profile/>,
    register: <Register />,
    login: <Login />
}

const Accounts = () => {
    const route = useParams().action
    return routes[route]
}

export default Accounts
