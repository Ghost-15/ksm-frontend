import {Link} from "react-router-dom";

function Endbar() {
    return (
        <footer className="shadow bg-gray-900 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/"
                       className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        {/*<img src="" className="h-8" alt="Logo"/>*/}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            KongoSafeManagement Shop</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                        {/*<li>*/}
                        {/*    <a href="#" className="hover:underline me-4 md:me-6">A propos</a>*/}
                        {/*</li>*/}
                        <li>
                            <Link to="#" className="hover:underline me-4 md:me-6">Politique de confidentialité</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline me-4 md:me-6">Conditions d&apos;utilisation</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline me-4 md:me-6">Conditions de vente</Link>
                        </li>
                        <li>
                            <Link to="/contacter-nous" className="hover:underline me-4 md:me-6">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-400 sm:text-center">
                    Copyright © 2024 <Link to="/" className="hover:underline">
                    KongoSafeManagement Shop</Link>
                </span>
            </div>
        </footer>

    );
}

export default Endbar;