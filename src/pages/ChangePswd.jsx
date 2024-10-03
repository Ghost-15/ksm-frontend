import {useContext, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "../app/api/axios";
import useAuth from "../auth/useAuth";
import AppContext from "../auth/AppProvider";

function ChangePswd() {
    const errRef = useRef();
    let navigate = useNavigate();
    const { auth } = useAuth();
    const { setAuth } = useContext(AppContext);

    const [user, setUser] = useState({
        username: auth?.username,
        newPswd: "",
        comfirmPswd: "",
    });
    const [errMsg, setErrMsg] = useState('');

    const { newPswd, comfirmPswd } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/backend/savePassword", user);
            navigate("/Login");
            setAuth();
            auth();
        }catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 406) {
                setErrMsg('Password Incorrect');
            } else {
                setErrMsg('Fetch Failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Change Password</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
                <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
                    <div>
                        <label htmlFor="New Password" className="block text-sm font-medium leading-6 text-gray-900">New Password</label>
                        <div className="mt-2">
                            <input
                                type={"text"}
                                placeholder="  Enter your New Password"
                                name="newPswd"
                                value={newPswd}
                                onChange={(e) => onInputChange(e)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Comfirmation Password" className="block text-sm font-medium leading-6 text-gray-900">Comfirmation Password</label>
                        <div className="mt-2">
                            <input
                                type={"text"}
                                placeholder="  Enter your Comfirmation Password"
                                name="comfirmPswd"
                                value={comfirmPswd}
                                onChange={(e) => onInputChange(e)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePswd;