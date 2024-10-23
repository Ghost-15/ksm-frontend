import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from '../app/api/axios';

const DetailItem = () => {

    const [item, setItem] = useState({
        name: "",
        description: "",
        conditionnement: "",
        coloris: "",
        prix: "",
        picture_url: "",
        pdf_url:""
    })
    const {name, description, conditionnement, coloris, prix, picture_url, pdf_url} = item;
    const { productName } = useParams();

    useEffect( () => {
        getProduct();
    }, []);
    const getProduct = async () => {
        const result = await axios.get(`/HUB/getProduct/${productName}`);
        setItem(result.data);
    };

    return (
        <div className="h-full flex items-center justify-center">
            <div className='max-w-[1240px] mx-auto grid gap-4 mb-10'>
                <div className='flex flex-col justify-center'>
                    <div className="grid gap-4">
                            <div>
                                <img className="w-full rounded-lg"
                                     src={picture_url} alt=""/>
                            </div>
                                {/*<div className="grid grid-cols-5 gap-4">*/}
                                {/*    <div>*/}
                                {/*        <img className="h-auto max-w-full rounded-lg"*/}
                                {/*             src="/produits/ptv/casqueKask.jpg"*/}
                                {/*             alt=""/>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <img className="h-auto max-w-full rounded-lg"*/}
                                {/*             src="/produits/ptv/casqueKask.jpg"*/}
                                {/*             alt=""/>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <img className="h-auto max-w-full rounded-lg"*/}
                                {/*             src="/produits/ptv/casqueKask.jpg"*/}
                                {/*             alt=""/>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <img className="h-auto max-w-full rounded-lg"*/}
                                {/*             src="/produits/ptv/casqueKask.jpg"*/}
                                {/*             alt=""/>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <img className="h-auto max-w-full rounded-lg"*/}
                                {/*             src="/produits/ptv/casqueKask.jpg"*/}
                                {/*             alt=""/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h1 className='md:text-4xl sm:text-3xl text-[#3399FF] text-2xl font-bold py-2'>
                                {name}
                            </h1>
                            <p>
                                {description}
                            </p>

                            <a href={pdf_url} className="mt-5 underline underline-offset-8">Normes & Documentations</a>

                            <h1 className="mt-5">
                                Conditionnement<br/>
                                <p className="mt-2 inline-flex items-center px-24 py-2.5 text-sm font-medium text-center text-white bg-gray-800">
                                    {conditionnement} piece
                                </p>
                            </h1>

                            <h1 className="mt-5">
                                Coloris<br/>
                                <p className="mt-2 inline-flex items-center px-24 py-2.5 text-sm font-medium text-center text-white bg-gray-800">
                                    {coloris}
                                </p>
                            </h1>

                            <div className="flex justify-end">
                                <span className="text-3xl text-right font-bold text-gray-900 ">
                                    {prix} FCFA HT<br/></span>
                            </div>

                            <div className="flex justify-end">
                            <div className="grid grid-cols-3 gap-2">
                                 <div className='grid grid-cols-3 gap-2 justify-center items-center'>
                                    <button className='bg-gray-100 font-bold text-xl rounded-xl flex justify-center items-center'>-</button>
                                    <span className='bg-gray-200 font-bold text-xl rounded-xl flex justify-center items-center'></span>
                                    <button className='bg-gray-100 font-bold text-xl rounded-xl flex justify-center items-center'>+</button>
                                </div>
                            <button className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl'>
                                Ajouter au panier
                            </button>

                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Contacter nous
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DetailItem;