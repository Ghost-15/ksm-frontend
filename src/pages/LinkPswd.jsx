import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "../app/api/axios.js";

function LinkPswd() {

    let navigate = useNavigate();
    const errRef = useRef();

    const [phare, setPhare] = useState({
        username: ""
    });
    const [newPswd, setNewPswd] = useState('');
    const [comfirmPswd, setComfirmPswd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const {username} = phare;
    const { code } = useParams();

    useEffect( () => {
        comfirm();
    }, []);
    const comfirm = async () => {
        setErrMsg('')
        setSuccMsg('')
        try {
            const result = await axios.get(`/backend/confirm/${code}`);
            console.log(result.data)
            setPhare(result?.data);
        } catch (err){
            if (!err?.response) {
                setErrMsg("La page que vous cherchez n'existe pas");
            } else if (err.response?.status === 406 || err.response?.status === 408) {
                setErrMsg('Le lien de réinitialisation de mot de passe a expire');
            } else {
                setErrMsg("La page que vous cherchez n'existe pas");
            }
            errRef.current.focus();
        }
    };
    const onSubmit = async (e) => {
        setErrMsg('')
        setSuccMsg('')
        e.preventDefault();
        try {
            const reponse = await axios.post("/backend/changePswdLink",
                JSON.stringify({username, newPswd, comfirmPswd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                });

            if(reponse?.status === 200){
                setNewPswd('')
                setComfirmPswd('')
                setPhare('');
                console.log("setPhare : " +setPhare)
                setSuccMsg('Votre mot de passe a ete modifier');
                navigate("/Burreau");
            }
        } catch (err) {
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
        <div className="h-screen justify-items-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <p ref={errRef} className="text-green-600 text-center" aria-live="assertive">{succMsg}</p>
            </div>
            {phare != null ? (
                <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
                            Réinitialisation du mot de passe</h2>
                    </div>

                    <div>
                        <label htmlFor="New Password" className="block text-sm font-medium leading-6 text-gray-900">
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
                        <label htmlFor="Comfirmation Password" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirmation du mot de passe</label>
                        <div className="mt-2">
                            <input
                                type={"text"}
                                placeholder="Comfirmer le nouveau mot de passe"
                                name="comfirmPswd"
                                value={comfirmPswd}
                                onChange={(e) => setComfirmPswd(e.target.value)}
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
                    <p ref={errRef} className="text-green-600 text-center" aria-live="assertive">{succMsg}</p>
                    <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
                </form>
            )
                : (
                <div className="h-screen flex items-center justify-center">
                    <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
                </div>
                )
            }
        </div>
    );
}

export default LinkPswd;