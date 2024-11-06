import {useRef, useState} from 'react';
import axios from "../app/api/axios";
import useAuth from "../auth/useAuth";

function ChangePswd() {

    const errRef = useRef();
    const { auth } = useAuth();

    const [username] = useState({ username: auth?.username });
    const [actuelPswd, setActuelPswd] = useState('')
    const [newPswd, setNewPswd] = useState('')
    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/backend/savePassword",
                JSON.stringify({username, actuelPswd, newPswd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                });
            if(response?.status === 200){
                setActuelPswd('')
                setNewPswd('')
                setSuccMsg('Votre mot de passe a été modifier');
            }
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
        <div className="flex h-screen flex-col">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
                    Changer le mot de passe</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <p ref={errRef} className="text-green-600 text-center" aria-live="assertive">{succMsg}</p>
                <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>                <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
                    <div>
                        <label htmlFor="New Password" className="block text-sm font-medium leading-6 text-gray-900">
                            Mot de passe actuel</label>
                        <div className="mt-2">
                            <input
                                type={"text"}
                                placeholder="Entrer l'actuel mot de passe"
                                name="actuelPswd"
                                value={actuelPswd}
                                onChange={(e) => setActuelPswd(e.target.value)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Comfirmation Password" className="block text-sm font-medium leading-6 text-gray-900">
                            Nouveau mot de passe</label>
                        <div className="mt-2">
                            <input
                                type={"text"}
                                placeholder="Entrer le nouveau mot de passe"
                                name="newPswd"
                                value={newPswd}
                                onChange={(e) => setNewPswd(e.target.value)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePswd;