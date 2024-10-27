
function IndexBoca() {
    return (
        <main className="h-screen">
            <h1 className="mt-10 flex justify-center text-5xl font-bold text-[#3399FF] ">Bouchons d&apos;oreilles et casques antibruit</h1>

            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <a href="/protection-auditive">
                    <button type="button"
                            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Produits phares
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Bouchons d&apos;oreilles
                    </button>
                </a>
                <a href="#">
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Arceaux antibruit
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Casques antibruit
                    </button>
                </a>
                <a>
                    <button type="button"
                            className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                        Coquilles antibruit
                    </button>
                </a>
            </div>


            <div className="mt-20"/>
        </main>
    );
}

export default IndexBoca;