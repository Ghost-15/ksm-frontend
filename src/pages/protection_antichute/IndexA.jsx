import {Helmet} from "react-helmet";

function IndexA() {
    return (
        <main className="h-screen">
            <Helmet>
                <meta name="robots" content="index, follow"/>
                <meta name="description" content="Les chutes de hauteur représentent un risque qui ne donne aucun droit à l'erreur. Protégez-vous !" />
                <title>Protection antichute | EPI | KongoSafeManagement Shop</title>
            </Helmet>

            <h1 className="mt-10 flex justify-center text-5xl font-bold text-[#3399FF] ">Protection antichute</h1>

            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <a>
                    <button type="button"
                            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Produits phares
                    </button>
                </a>
            </div>

            <div className="mt-20"/>
        </main>
    );
}

export default IndexA;