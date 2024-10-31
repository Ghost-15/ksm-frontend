import {useRef, useState} from "react";
import axios from "../app/api/axios";

export default function ForgotPswd() {
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const onSubmit = async (e) => {
        setErrMsg('')
        setSuccMsg('')
        e.preventDefault();
        try {
            await axios.post("/backend/linkToNewPswd",
                JSON.stringify({ username }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setSuccMsg('Nous vous avons envoyé un e-mail, veuillez vérifier votre boîte mail');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Désolé... Mauvais e-mail');
            } else {
                setErrMsg('No Server Response');
            }
            errRef.current.focus();
        }
    };

    return (
        <div className="flex h-screen flex-col">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
                    Mot de passe oublie?</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
                    <div>
                        <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">
                            Un lien pour réinitialiser votre mot de passe sera envoyé sur votre boîte mail.</label>
                        <div className="mt-2">
                            <input
                                type={"email"}
                                placeholder="Entrer votre Email"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Envoyer
                        </button>

                        {/*<button className="flex w-full justify-center rounded-md bg-slate-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm" disabled>*/}
                        {/*    Patienter...*/}
                        {/*</button>*/}
                    </div>
                    <p ref={errRef} className="text-green-600 text-center" aria-live="assertive">{succMsg}</p>
                    <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
                </form>
            </div>
        </div>
    );
}