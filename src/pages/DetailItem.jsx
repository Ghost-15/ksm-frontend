
const DetailItem = () => {

    return (
        <div className="flex items-center justify-center bg-fixed bg-center h-screen bg-cover">

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>

                <div className='flex flex-col justify-center'>
                        <div className="grid gap-4">
                            <div>
                                <img className="w-96 rounded-lg"
                                     src="/produits/ptv/casqueKask.jpg" alt=""/>
                            </div>
                                <div className="grid grid-cols-5 gap-4">
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg"
                                             src="/produits/ptv/casqueKask.jpg"
                                             alt=""/>
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg"
                                             src="/produits/ptv/casqueKask.jpg"
                                             alt=""/>
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg"
                                             src="/produits/ptv/casqueKask.jpg"
                                             alt=""/>
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg"
                                             src="/produits/ptv/casqueKask.jpg"
                                             alt=""/>
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg"
                                             src="/produits/ptv/casqueKask.jpg"
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h1 className='md:text-4xl sm:text-3xl text-[#3399FF] text-2xl font-bold py-2'>
                                Casque de sécurité KASK ZENITH X
                            </h1>
                            <p>
                                Casque non ventilé en polypropylène. Coque interne en polystyrène HD.
                                Jugulaire en cuir 4 points. Réglage par crémaillère. Anneau porte-casque.
                                Taille universelle réglable de 52 à 63 cm.
                            </p>

                            <a href="/pdf" className="mt-5 underline underline-offset-8">Normes & Documentations</a>

                            <h1 className="mt-5">
                                Conditionnement<br/>
                                <p className="mt-2 inline-flex items-center px-24 py-2.5 text-sm font-medium text-center text-white bg-gray-800">
                                    1 piece
                                </p>
                            </h1>

                            <h1 className="mt-5">
                                Coloris<br/>
                                <p className="mt-2 inline-flex items-center px-24 py-2.5 text-sm font-medium text-center text-white bg-gray-800">
                                    Blanc
                                </p>
                            </h1>

                            <div className="flex justify-end">
                                <span className="text-3xl text-right font-bold text-gray-900 ">
                                    77 317 FCFA HT<br/></span>
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
                                Appeler nous
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailItem;