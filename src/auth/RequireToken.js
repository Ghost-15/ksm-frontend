import {Navigate, Outlet, useLocation} from "react-router-dom";
import useAuth from "./useAuth";

const RequireToken = () => {
    const { auth } = useAuth();
    const location = useLocation();
    return (
        auth?.accessToken
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
    // return auth?.roles?.find(role => allowedRoles?.includes(role))
    //         ? <Outlet />
    //         : auth?.username
    //             ? <Navigate to="/unauthorized" state={{ from: location }} replace />
    //             : <Navigate to="/login" state={{ from: location }} replace />

    // allowedRoles.find((role) => auth?.role?.includes(role))
    // allowedRoles.includes(auth?.roles)
    // return  auth?.roles === allowedRoles ? (<Outlet />)
    //     : auth?.username ? (<Navigate to="/unauthorized" state={{ from: location }} replace />)
    //     : (<Navigate to="/login" state={{ from: location }} replace />);
}
export default RequireToken;