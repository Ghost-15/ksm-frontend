import {Navigate, Outlet, useLocation} from "react-router-dom";
import useAuth from "./useAuth";
const RequireEmail = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return(
        auth?.username ?
        <Outlet />
        : <Navigate to="/activation" state={{ from: location }} replace />)
}

export default RequireEmail;