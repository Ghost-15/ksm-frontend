import {useRef, useState} from 'react';
import useAxiosPrivate from "../auth/useAxiosPrivate.js";

function AddProduct() {
    const axiosPrivate = useAxiosPrivate();
    const errRef = useRef();

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [souscategory, setSouscategory] = useState('')
    const [description, setDescription] = useState('')
    const [conditionnement, setConditionnement] = useState('')
    const [coloris, setColoris] = useState('')
    const [prix, setPrix] = useState('')
    const [picture_url, setPicture_url] = useState('')
    const [pdf_url, setPdf_url] = useState('')

    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const onSubmit = async (e) => {
        setErrMsg('')
        setSuccMsg('')
        e.preventDefault();
        try {
            const response = await axiosPrivate.post("/HUB/addProduct",
                JSON.stringify({name, category,souscategory, description, conditionnement, coloris, prix, picture_url, pdf_url}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                });

            if(response?.status === 200){
                setName('')
                setConditionnement('')
                setColoris('')
                setPrix('')
                setPicture_url('')
                setPdf_url('')
                setDescription('')
                setSuccMsg('Nouveau produit ajouter');
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
        <div className="h-screen">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Ajouter un produit</h2>
                <p ref={errRef} className="text-green-600 text-center" aria-live="assertive">{succMsg}</p>
                <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
            </div>

            <div className="flex justify-center mt-5">
                <form onSubmit={(e) => onSubmit(e)} className="space-y-6">

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nom</label>
                            <div className="mt-2">
                                <input
                                    type={"text"}
                                    placeholder="Entre le nom"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                Category</label>
                            <div className="mt-2">
                            <select id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                <option selected>Selectionner la category</option>
                                <option value="tyv">Protection de la tête, des yeux et du visage</option>
                                <option value="auditive">Bouchons d&apos;oreilles et casques antibruit</option>
                                <option value="respiratoire">Protection respiratoire</option>
                                <option value="main">Gants de protection et de dtravail</option>
                                <option value="pied">Chaussures de sécurité et de travail</option>
                                <option value="corps">Vêtements de travail</option>
                                <option value="antichute">Protection antichute</option>
                                <option value="comp">Compléter sa protection</option>
                            </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="souscategory" className="block text-sm font-medium leading-6 text-gray-900">
                                Sous Category</label>
                            <div className="mt-2">
                                <select id="souscategory"
                                        value={souscategory}
                                        onChange={(e) => setSouscategory(e.target.value)}
                                        required
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option selected>Selectionner la sous category</option>
                                    <option value="casque">casque</option>
                                    <option value="lunette">lunette</option>
                                    <option value="masque">masque</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="conditionnement" className="block text-sm font-medium leading-6 text-gray-900">
                                Conditionnement</label>
                            <div className="mt-2">
                                <input
                                    type={"number"}
                                    placeholder="Entre la conditionnement"
                                    name="conditionnement"
                                    value={conditionnement}
                                    onChange={(e) => setConditionnement(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="coloris" className="block text-sm font-medium leading-6 text-gray-900">
                                Coloris</label>
                            <div className="mt-2">
                                <input
                                    type={"text"}
                                    placeholder="Entre la coloris"
                                    name="coloris"
                                    value={coloris}
                                    onChange={(e) => setColoris(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="prix" className="block text-sm font-medium leading-6 text-gray-900">
                                Prix</label>
                            <div className="mt-2">
                                <input
                                    type={"number"}
                                    placeholder="Entre le prix"
                                    name="prix"
                                    value={prix}
                                    onChange={(e) => setPrix(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="picture_url" className="block text-sm font-medium leading-6 text-gray-900">
                                Image url</label>
                            <div className="mt-2">
                                <input
                                    type={"text"}
                                    placeholder="Entre l'url de l'image"
                                    name="picture_url"
                                    value={picture_url}
                                    onChange={(e) => setPicture_url(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>                            </div>
                        </div>

                        <div>
                            <label htmlFor="pdf_url" className="block text-sm font-medium leading-6 text-gray-900">
                                Pdf url</label>
                            <div className="mt-2">
                                <input
                                    type={"text"}
                                    placeholder="Entre l'url de l'image"
                                    name="pdf_url"
                                    value={pdf_url}
                                    onChange={(e) => setPdf_url(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                            Description</label>
                        <div className="mt-2">
                                <textarea
                                    placeholder="Entre la description"
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Soumettre
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;