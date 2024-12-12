import {Helmet} from "react-helmet";

function IndexC() {
    return (
        <main className="h-screen">
            <Helmet>
                <meta name="description" content="Découvrez notre sélection de chaussures de protection. Pour des travaux en intérieur comme à l'extérieur, protégez-vous des risques d'écrasement, de perforation ou de glissade." />
                <title>Chaussures de sécurité et de travail | EPI | KongoSafeManagement Shop</title>
            </Helmet>

            <h1 className="mt-10 flex justify-center text-5xl font-bold text-[#3399FF] ">Chaussures de sécurité et de travail</h1>

            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <a href="/protection-des-pieds">
                    <button type="button"
                            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Produits phares
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Chaussures de sécurité
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Chaussures de travail
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Bottes de sécurité
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Sabots de sécurité
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Accessoires pour chaussures et bottes de sécurité
                    </button>
                </a>
            </div>

            <div className="mt-20"/>
        </main>
    );
}

export default IndexC;