import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const [auth, setAuth] = useState({});

    // if (auth?.accessToken === undefined) {
    //     console.log("null")
    // }

    return (
        <AppContext.Provider value={{auth, setAuth}}>
            {children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppContext;