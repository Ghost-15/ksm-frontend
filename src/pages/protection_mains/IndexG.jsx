import {Helmet} from "react-helmet";

function IndexG() {
    return (
        <main className="h-screen">
            <Helmet>
                <meta name="robots" content="index, follow"/>
                <meta name="description" content="Nos experts vous aident à trouver le gant partenaire de votre travail au quotidien. Celui qui vous protège dans les meilleures conditions de confort." />
                <title>Gants de protection et de travail | EPI | KongoSafeManagement Shop</title>
            </Helmet>

            <h1 className="mt-10 flex justify-center text-5xl font-bold text-[#3399FF] ">Gants de protection et de travail</h1>

            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <a href="/protection-des-mains">
                    <button type="button"
                            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Produits phares
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Gants de manutention
                    </button>
                </a>
                <a href="">
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Gants anticoupures
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Gants antichocs
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Gants de protection chimique
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Gants antichaleur et de soudage
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Gants antifroid
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Gants de protection risque électrique
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Gants jetables
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Manchettes de protection
                    </button>
                </a>
            </div>

            <div className="mt-20"/>
        </main>
    );
}

export default IndexG;