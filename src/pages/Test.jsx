import {Link} from "react-router-dom";

function Test() {
    return (
        <main className="h-screen grid grid-cols-4 gap-4">

            <div className='bg-[#c026d3]'/>

            <div className="py-48">
                {/*<img src="/image.png" className="bg-gray-500 h-96 w-96 expand-y-24 expand-x-24" alt="house"/>*/}
            </div>

            <form className="py-24  max-w-sm mx-auto">
                <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">Welcome to our School</h1>
                    <span>We make it easy for everyone to access</span>
                    <br/>
                    <p>thier account</p>
                </div>

                <div className="mt-14 mb-5">
                    <input type="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           placeholder="Enter your email" required/>
                </div>
                <div className="mb-5">
                    <input type="password" id="password"
                           placeholder="Enter your password"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           required/>
                </div>

                <div className="flex items-start mb-5 justify-between">
                    <div className="flex items-center h-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                   className="placeholder-bg-black w-4 h-4 border border-purple-700 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                   required/>
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember
                            me</label>
                    </div>

                    <div className="text-sm">
                        <a href="" className="font-semibold text-purple-700">
                            Forgot Password?</a>
                    </div>
                </div>



                <div className="mt-10 flex items-start mb-5 justify-between gap-4">

                    <button type="submit"
                            className="text-white bg-[#c026d3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5">
                        Sign In
                    </button>

                    <button type="submit"
                            className="text-white bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5">
                        Create Account
                    </button>
                </div>

                <div className="mt-10">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                            <li>
                                <Link to="#" className="me-4 md:me-6">login with</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-black me-4 md:me-6">Facebook</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-black me-4 md:me-6">Twitter</Link>
                            </li>
                            <li>
                                <Link to="/contacter-nous" className="text-black me-4 md:me-6">Google</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>

        </main>
    );
}

export default Test;