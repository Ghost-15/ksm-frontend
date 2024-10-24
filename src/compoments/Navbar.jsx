import {Link} from "react-router-dom";
import AppContext from "../auth/AppProvider.js";
import {useContext} from "react";

export default function Navbar() {

    const { cartItems } = useContext(AppContext);

    return (
        <nav className="bg-white border-gray-200">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                        KongoSafeManagement Shop</span>
                </Link>
                <div id="mega-menu" className="justify-items-center hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">

                        <li>
                            <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" className="flex items-center justify-between w-full py-2 px-3 font-medium text-black border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#99CCFF] md:p-0 md:w-auto">
                                Nos produits <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                            </button>
                            <div id="mega-menu-dropdown"
                                 className="flex justify-start z-10 grid hidden w-auto grid-cols-4 text-sm border rounded-lg shadow-md border-gray-700 bg-gray-700">

                                <div className="p-4 pb-0 md:pb-4 text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to="/protection-de-la-tete-des-yeux-et-du-visage" className="text-white font-bold">
                                                Protection de la tête,
                                                <br/>des yeux et du visage
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Casque de securite
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/protection-des-lunettes" className="text-gray-400 hover:text-[#99CCFF]">
                                                Lunettes
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/protection-de-la-tete-des-yeux-et-du-visage" className="inline-flex items-center text-sm font-medium text-blue-400 hover:underline hover:text-blue-600">
                                                Autres
                                                <span className="sr-only">Explore our brands </span>
                                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 pb-0 md:pb-4 text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to="/protection-auditive" className="text-white font-bold">
                                                Bouchons d&apos;oreilles
                                                <br/>et casques antibruit
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Bouchons d&apos;oreilles
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Arceaux antibruit
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/protection-auditive" className="inline-flex items-center text-sm font-medium text-blue-400 hover:underline hover:text-blue-600">
                                            Autres
                                            <span className="sr-only">Explore our brands </span>
                                            <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>


                                <div className="p-4 pb-0 md:pb-4 text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to="/protection-respiratoire" className="text-white font-bold">
                                                Protection
                                                <br/>respiratoire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Masques jetables
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Demi-masques
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/protection-respiratoire" className="inline-flex items-center text-sm font-medium text-blue-400 hover:underline hover:text-blue-600">
                                                Autres
                                                <span className="sr-only">Explore our brands </span>
                                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 pb-0 md:pb-4 text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to="/protection-des-mains" className="text-white font-bold">
                                                Gants de protection
                                                <br/>et de travail
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Gants de manutention
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Gants anticoupures
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/protection-des-mains" className="inline-flex items-center text-sm font-medium text-blue-400 hover:underline hover:text-blue-600">
                                                Autres
                                                <span className="sr-only">Explore our brands </span>
                                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 pb-0 md:pb-4 text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to="/protection-des-pieds" className="text-white font-bold">
                                                Chaussures de sécurité
                                                <br/>et de travail
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Chaussures de sécurité
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Chaussures de travail
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/protection-des-pieds" className="inline-flex items-center text-sm font-medium text-blue-400 hover:underline hover:text-blue-600">
                                                Autres
                                                <span className="sr-only">Explore our brands </span>
                                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 pb-0 md:pb-4 text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to="/protection-du-corps" className="text-white font-bold">
                                                Vêtements de
                                                <br/>travail
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Tee-shirts et polos de travail
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Pulls et sweat-shirts de travail
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/protection-du-corps" className="inline-flex items-center text-sm font-medium text-blue-400 hover:underline hover:text-blue-600">
                                                Autres
                                                <span className="sr-only">Explore our brands </span>
                                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 pb-0 md:pb-4 text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to="/protection-antichute-longes" className="text-white font-bold">
                                                Protection
                                                <br/>antichute
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Kits travaux en hauteur
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Harnais de sécurité
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/protection-antichute-longes" className="inline-flex items-center text-sm font-medium text-blue-400 hover:underline hover:text-blue-600">
                                                Autres
                                                <span className="sr-only">Explore our brands </span>
                                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 pb-0 md:pb-4 text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to="/completer-sa-protection" className="text-white font-bold">
                                                Compléter sa
                                                <br/>protection
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Lavage des mains
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className="text-gray-400 hover:text-[#99CCFF]">
                                                Lavage des sols et des surfaces
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/completer-sa-protection" className="inline-flex items-center text-sm font-medium text-blue-400 hover:underline hover:text-blue-600">
                                                Autres
                                                <span className="sr-only">Explore our brands </span>
                                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>


                        <li>
                            <button className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#99CCFF] md:p-0 md:w-auto">
                                Service
                            </button>
                        </li>


                        <li>
                            <Link to="cart">
                                <button className='flex items-center justify-between w-full py-2 px-3 bg-gray-100 rounded-full relative'>
                                    <img src="/iconCart.png" alt="" className='w-6'/>
                                    <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>
                                        {cartItems.length}</span>
                                </button>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
}