import {useNavigate} from "react-router-dom";

function Forbidden() {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <main  className='flex justify-center'>
            <div className='h-56 grid grid-cols-1 gap-4 content-around'>
                <br />
                <h1 className="text-4xl text-red-600 font-bold items-center justify-center">
                    Sorry, You do not have access to this page...
                </h1>
                <br />
                <button onClick={goBack} className="flex w-20 justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Go Back
                </button>
            </div>
        </main>
    )
}

export default Forbidden;