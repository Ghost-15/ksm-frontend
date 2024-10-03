import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import PropTypes from "prop-types";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        allowedRoles.includes(auth?.role)
            ? <Outlet />
            : auth?.accessToken
                ? <Navigate to="/forbidden" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

RequireAuth.propTypes = {
    allowedRoles: PropTypes.node.isRequired,
};
export default RequireAuth;