import {Link} from "react-feather";

function Missing() {
    return (
        <main className='flex justify-center'>
            <div className='h-56 grid grid-cols-1 gap-4 content-around'>
                <h2 className='flex justify-center'>
                    <Link className="bg-white text-xl text-red-600 hover:text-red-300 rounded-md px-3 py-2 text-sm font-medium"
                          to='/'>Sorry, Page Not Found...</Link>
                </h2>
            </div>
        </main>    );
}

export default Missing;