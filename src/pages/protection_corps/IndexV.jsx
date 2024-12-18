import {Helmet} from "react-helmet";

function IndexV() {
    return (
        <main className="h-screen">
            <Helmet>
                <meta name="robots" content="index, follow"/>
                <meta name="description" content="Spécialiste reconnu de la vente du vêtement technique professionnel, le Groupe RG habille tous les secteurs d’activités. Découvrez notre sélection." />
                <title>Vêtements de travail | EPI | KongoSafeManagement Shop</title>
            </Helmet>

            <h1 className="mt-10 flex justify-center text-5xl font-bold text-[#3399FF] ">Vêtements de travail</h1>

            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <a href="/protection-du-corps">
                    <button type="button"
                            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Produits phares
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Tee-shirts et polos de travail
                        Pulls et sweat-shirts de travail
                        Gilets de travail
                        Vestes de travail
                        Blouses de travail
                        Bermudas de travail
                        Pantalons et jeans de travail
                        Combinaisons de travail
                        Blousons, parkas et vêtements thermiques
                        Pantalons et vestes de pluie
                        Vêtements haute-visibilité
                        Vêtements antifeu
                        Vêtements multirisque
                        Vêtements jetables
                        Ceintures et accessoires pour vêtements de travail
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                    </button>
                </a>
            </div>

            <div className="mt-20"/>
        </main>
    );
}

export default IndexV;