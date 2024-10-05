import {useRef, useState} from "react";
import useAxiosPrivate from "../auth/useAxiosPrivate";

const AddUser = () => {
    const axiosPrivate = useAxiosPrivate();
    const errRef = useRef();

    const [first_name,setFirst_name]= useState('')
    const [last_name, setLast_name]= useState('')
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const [phone_number, setPhone_number]= useState('')
    const [role, setRole]= useState('')
    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const onSubmit = async (e) => {
        setErrMsg('')
        setSuccMsg('')
        e.preventDefault();
        try {
            const response = await axiosPrivate.post("/SQL/register",
                JSON.stringify({first_name, last_name, username, password, phone_number, role}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                });

            if(response?.status === 200){
                setFirst_name('')
                setLast_name('')
                setUsername('')
                setPassword('')
                setPhone_number('')
                setSuccMsg('Nouveau utilisateur ajouter');
            }
        }catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
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
                    Ajouter un utilisateur</h2>
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
                                onChange={(e) => setFirst_name(e.target.value)}
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
                                onChange={(e) => setLast_name(e.target.value)}
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
                                onChange={(e) => setUsername(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
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
                                onChange={(e) => setPhone_number(e.target.value)}
                                autoComplete="Phone number"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Role" className="block text-sm font-medium leading-6 text-gray-900">Role</label>
                        <select id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option selected>Selectionner le Role</option>
                            <option>CEO</option>
                            <option>DEV</option>
                            <option>ADMIN</option>
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
export default AddUser