import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <p>Loading</p>
    }


    if(user){
        return children;
    }
    console.log(user)

    return <Navigate state={{from:location}} to="/login" replace ></Navigate>
};

export default PrivateRoute;