import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types'
import Loading from "../pages/Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to='/auth/login' />


};

PrivateRoute.propTypes = {
    children: PropTypes.object
}

export default PrivateRoute;