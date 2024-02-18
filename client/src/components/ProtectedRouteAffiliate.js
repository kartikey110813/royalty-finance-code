import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import AffiliateDashBoard from './pages/Affiliate/AffiliateDashBoard';

const ProtectedRouteAffiliate = ({ children }) => {
    let { user } = useUserAuth()
    if (!user) {
     <Navigate to="/" />;
    }
    else {
        return (
            <AffiliateDashBoard />
        )
    }
}

export default ProtectedRouteAffiliate;