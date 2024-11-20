import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "../../app/api/axios.js";

function Lunettes () {
    const errRef = useRef();

    const [products, setProducts] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        getAllCasque();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [products])
    const getAllCasque = async () => {
        try {
            const result = await axios.get("/HUB/getBySousCategory/lunette");
            setProducts(result.data);
        } catch (err) {
            if (!err?.response) {
                setErrMsg("Il n'y a aucun résultat à afficher");
            }
            errRef.current.focus();
        }
    };

    return (
        <main className="h-screen">
            <h1 className="mt-10 flex justify-center text-5xl font-bold text-[#3399FF] ">Protection de la tête, des yeux et du visage</h1>

            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <Link to="/protection-de-la-tete-des-yeux-et-du-visage">
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Produits phares
                    </button>
                </Link>
                <Link to="/protection-des-casques-de-securite">
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Casque de securite
                    </button>
                </Link>
                <Link to="/protection-des-lunettes">
                    <button type="button"
                            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Lunettes
                    </button>
                </Link>
                <Link to="">
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Masque
                    </button>
                </Link>
            </div>

            <div className="mt-10 justify-items-center grid grid-cols-1 gap-4">

                <div className="flex flex-wrap">
                    <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
                    <div className="grid grid-cols-3 gap-4">
                        <ul>
                            {products.map((product, index) =>  (
                                <Link to={`/detail-item/${product.name}`} key={index}>
                                    <div className="w-72 bg-white border border-gray-300 shadow hover:border-4 hover:border-blue-500 hover:shadow-2xl">
                                        <div className="p-4">
                                            <img src={product.picture_url} className="block w-full w-[150px] h-[150px] lg:w-[250px] lg:h-[250px]" alt=""/>
                                        </div>
                                        <div className="p-6">
                                            <h5 className="text-l font-semibold tracking-tight text-gray-900">
                                                {product.name}</h5>
                                            <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900">
                                        {product.prix} FCFA HT</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-20"/>
        </main>
    );
}

export default Lunettes;