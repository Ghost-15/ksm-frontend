import {Helmet} from "react-helmet";

function IndexComp() {
    return (
        <main className="h-screen">
            <Helmet>
                <meta name="description" content="Parce que la sécurité au travail, c'est prévenir tous les risques en milieu professionnel, nos experts ont sélectionné pour vous des produits d'hygiène, d'essuyage et des équipements pour sécuriser votre environnement de travail." />
                <title>Compléter sa protection | EPI | KongoSafeManagement Shop</title>
            </Helmet>

            <h1 className="mt-10 flex justify-center text-5xl font-bold text-[#3399FF] ">Compléter sa protection</h1>

            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <a href="/completer-sa-protection">
                    <button type="button"
                            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Produits phares
                    </button>
                </a>
                <a href="/">
                <button type="button"
                        className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                    Casque de securite
                </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Lunettes
                    </button>
                </a>
                <button type="button"
                        className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                    Masque
                </button>
            </div>

            <div className="mt-20"/>
        </main>
    );
}

export default IndexComp;