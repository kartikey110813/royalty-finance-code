import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import Dashboard from './pages/Dashboard/Dashboard';

const ProtectedRoute = ({ children }) => {
    let { user } = useUserAuth()
    console.log(user)
    if (!user) {
     <Navigate to="/" />;
    }
    else {
        return (
            <Dashboard />
        )
    }
}

export default ProtectedRoute;