import {useRef, useState} from 'react';
import useAxiosPrivate from "../auth/useAxiosPrivate.js";

function AddProduct() {
    const axiosPrivate = useAxiosPrivate();
    const errRef = useRef();

    const [product, setProduct] = useState({
        name: "",
        category: "",
        description: "",
        conditionnement: "",
        coloris: "",
        prix: "",
        picture: ""
    });
    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const { name, category, description, conditionnement, coloris, prix, picture } = product;

    const onInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosPrivate.post("/SQL/addProduct", product);
            setSuccMsg('Nouveau produit ajouter');
            setProduct('')
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
                                    onChange={(e) => onInputChange(e)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                Selectionner la category</label>
                            <div className="mt-2">
                            <select id="category"
                                    onChange={(e) => onInputChange(e)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                <option selected></option>
                                <option value={category}>tyv</option>
                                {/*<option value={category}>Protection de la tête, des yeux et du visage</option>*/}
                                <option value={category}>Bouchons d&apos;oreilles et casques antibruit</option>
                                <option value={category}>Protection respiratoire</option>
                                <option value={category}>Gants de protection et de travail</option>
                                <option value={category}>Chaussures de sécurité et de travail</option>
                                <option value={category}>Vêtements de travail</option>
                                <option value={category}>Protection antichute</option>
                                <option value={category}>Compléter sa protection</option>
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
                                    onChange={(e) => onInputChange(e)}
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
                                    onChange={(e) => onInputChange(e)}
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
                                    onChange={(e) => onInputChange(e)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="file_input" className="block text-sm font-medium leading-6 text-gray-900">
                                Telecharger le fichier</label>
                            <div className="mt-2">
                                <input type="file"
                                       // value={picture}
                                       onChange={(e) => picture(e.target.files[0])}
                                       required
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                            </div>
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
                                    onChange={(e) => onInputChange(e)}
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