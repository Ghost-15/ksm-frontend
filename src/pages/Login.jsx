import { useRef, useState, useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import useAuth from "../auth/useAuth.js";
import axios from '../app/api/axios';

const Login = () => {
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/backend/auth",
                JSON.stringify({username, password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            const accessToken = response?.data?.accessToken;
            const role = response?.data?.role;
            setAuth({username, role, accessToken});
            // setAuth({username, password, role, accessToken});
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Wrong Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Wrong Username or Password');
            } else if (err.response?.status === 403) {
                setErrMsg('Wrong Username or Password');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    
    return (
        <div className="flex h-screen flex-col">
            <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div className="mt-2">
                            <input id="username"
                                   name="username"
                                   type="username"
                                   ref={userRef}
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}
                                   required
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password</label>
                            <div className="text-sm">
                                <a href="/ForgotPswd" className="font-semibold text-red-600 hover:text-red-300">
                                    Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password"
                                   name="password"
                                   type="password"
                                   ref={userRef}
                                   value={password}
                                   onChange={(e) =>  setPassword(e.target.value)}
                                   required
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>
                    {/*<div className="persistCheck">*/}
                    {/*    <input*/}
                    {/*        type="checkbox"*/}
                    {/*        id="persist"*/}
                    {/*        onChange={togglePersist}*/}
                    {/*        checked={persist}*/}
                    {/*    />*/}
                    {/*    <label htmlFor="persist">Trust This Device</label>*/}
                    {/*</div>*/}
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login