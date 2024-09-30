import {useRef, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

function AddProduct() {
    const errRef = useRef();
    let navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        phone_number: "",
        role: "",
    });
    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const { first_name, last_name, username, password, phone_number, role} = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // await axiosPrivate.post("/backend/registration", user);
            setSuccMsg('Nouveau produit ajouter');
        }catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                navigate('/login', { state: { from: location }, replace: true });
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else if (err.response?.status === 403) {
                setErrMsg('Forbidden');
            } else {
                setErrMsg('Fetch Failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <div className="flex h-screen flex-col">
            <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Ajouter un produit</h2>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <p ref={errRef} className="text-green-600 text-center" aria-live="assertive">{succMsg}</p>
                <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
                <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
                    <div>
                        <label htmlFor="First name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <div className="mt-2">
                            <input
                                type={"text"}
                                placeholder="  Enter your First name"
                                name="first_name"
                                value={first_name}
                                onChange={(e) => onInputChange(e)}
                                autoComplete="First name"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Last name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <div className="mt-2">
                            <input
                                type={"text"}
                                placeholder="  Enter your Last name"
                                name="last_name"
                                value={last_name}
                                onChange={(e) => onInputChange(e)}
                                autoComplete="Last name"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div className="mt-2">
                            <input
                                type={"text"}
                                placeholder="  Enter your username"
                                name="username"
                                value={username}
                                onChange={(e) => onInputChange(e)}
                                autoComplete="Username"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="mt-2">
                            <input
                                type={"text"}
                                placeholder="  Enter your Password"
                                name="password"
                                value={password}
                                onChange={(e) => onInputChange(e)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Phone numbe" className="block text-sm font-medium leading-6 text-gray-900">Phone numbe</label>
                        <div className="mt-2">
                            <input
                                type={"text"}
                                placeholder="  Enter your Phone number"
                                name="phone_number"
                                value={phone_number}
                                onChange={(e) => onInputChange(e)}
                                autoComplete="Phone number"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Role" className="block text-sm font-medium leading-6 text-gray-900">Role</label>
                        <select id="countries"
                                value={role}
                                onChange={(e) => onInputChange(e)}
                                autoComplete="role"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option selected>Selectionner le Role</option>
                            <option value="1">CEO</option>
                            <option value="2">DEV</option>
                            <option value="3">ADMIN</option>
                        </select>
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

export default AddProduct;