import React from 'react'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {

    const isAuth =localStorage.getItem("access-token")
    return isAuth?children:<Navigate to="/login" />
}

export default PrivateRoute
