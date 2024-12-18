import {Link, useParams} from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import axios from '../app/api/axios';
import AppContext from "../auth/AppProvider.js";
import {Helmet} from "react-helmet";

const DetailItem = () => {

    const errRef = useRef();

    const [item, setItem] = useState({
        name: "",
        description: "",
        conditionnement: "",
        coloris: "",
        prix: "",
        picture_url: "",
        pdf_url:""
    })
    const [errMsg, setErrMsg] = useState('');

    const {name, description, conditionnement, coloris, prix, picture_url, pdf_url} = item;
    const { productName } = useParams();
    const { cartItems, addToCart , removeFromCart} = useContext(AppContext)

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
    };
    useEffect( () => {
        getProduct();
    }, []);
    const getProduct = async () => {
        const result = await axios.get(`/HUB/getProduct/${productName}`);
        setItem(result.data);
        if(result.data === ""){
            setErrMsg("Il n'y a aucun résultat à afficher");
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <Helmet>
                <meta name="robots" content="index, follow"/>
                <meta name="description" content={description} />
                <title>{name} | EPI | KongoSafeManagement Shop</title>
            </Helmet>

            <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
            {item != null ? (
                <div className='max-w-[1240px] mx-auto grid grid-cols-2 gap-4 mb-10'>
                <div className='flex flex-col justify-center'>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-xl"
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
                            <h1 className='md:text-5xl sm:text-4xl text-[#3399FF] text-2xl font-bold py-2'>
                                {name}
                            </h1>
                            <p className="mt-2">
                                <h1 className='text-2xl font-bold py-2'>
                                    Descriptif du fabricant : </h1>
                                {description}
                            </p>

                            <a href={pdf_url} className="mt-5 text-gray-600 underline underline-offset-8">Normes & Documentations</a>

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
                            <div className="grid grid-cols-2 gap-2">
                                {!cartItems.find(product => product.id === item.id) ? (
                                        <button className='px-4 py-2 bg-gray-800 text-white text-lg font-bold rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                                                onClick={() => {
                                                    addToCart(item)}
                                                }>
                                            Ajouter au panier
                                        </button>
                                    ) : (
                                        <div className="flex items-center justify-center gap-4">
                                            <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                                onClick={() => {
                                                    const cartItem = cartItems.find((product) => product.id === item.id);
                                                    if (cartItem.quantity === 1) {
                                                        handleRemoveFromCart(item);
                                                    } else {
                                                        removeFromCart(item);
                                                    }
                                                }}>
                                                -
                                            </button>
                                            <p className='text-gray-600'>
                                                {cartItems.find(product => product.id === item.id).quantity}
                                            </p>
                                            <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                                onClick={() => {
                                                addToCart(item)
                                            }}>
                                                +
                                            </button>
                                        </div>
                                    )
                                }
                            <Link to="/contacter-nous">
                                <button className="px-4 py-2 bg-blue-700 text-white text-lg font-bold rounded hover:bg-blue-500 focus:outline-none">
                                    Contacter nous
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            ) : (
                <h1 className="text-center text-xl font-bold leading-9 tracking-tight text-red-600">
                    La page que vous cherchez n&apos;existe pas.</h1>
            )}
        </div>
    );
}

export default DetailItem;