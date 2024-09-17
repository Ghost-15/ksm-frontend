
function Endbar() {
    return (
        <footer className="shadow bg-gray-900 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/"
                       className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="" className="h-8" alt="Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            KongoSafeManagement Shop</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                        {/*<li>*/}
                        {/*    <a href="#" className="hover:underline me-4 md:me-6">A propos</a>*/}
                        {/*</li>*/}
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Politique de confidentialite</a>
                        </li>
                        <li>
                            <a href="/contacter-nous" className="hover:underline me-4 md:me-6">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-400 sm:text-center">
                    © 2024 <a href="/" className="hover:underline">
                    KongoSafeManagement Shop</a>
                </span>
            </div>
        </footer>

    );
}

export default Endbar;