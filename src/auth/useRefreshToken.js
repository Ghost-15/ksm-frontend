import axios from '../app/api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    return async () => {
        const response = await axios.get("/backend/refresh", {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response?.data)
            console.log(response?.data?.token);
            return {...prev, accessToken: response.data.token}
        });
        return response.data.token;
    };
};

export default useRefreshToken;