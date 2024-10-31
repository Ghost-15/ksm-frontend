
function Code() {
    function focusNextInput(el, prevId, nextId) {
        if (el.value.length === 0) {
            if (prevId) {
                document.getElementById(prevId).focus();
            }
        } else {
            if (nextId) {
                document.getElementById(nextId).focus();
            }
        }
    }

    document.querySelectorAll('[data-focus-input-init]').forEach(function(element) {
        element.addEventListener('keyup', function() {
            const prevId = this.getAttribute('data-focus-input-prev');
            const nextId = this.getAttribute('data-focus-input-next');
            focusNextInput(this, prevId, nextId);
        });
    });

    return (
        <div className="flex h-screen flex-col">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
                    Code</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="max-w-sm mx-auto justify-items-center">
                    <p id="helper-text-explanation" className="block text-sm font-medium leading-6 text-gray-900">
                        Veuillez introduire le code à 6 chiffres que nous vous avons envoyé par e-mail.</p>
                    <div className="flex mt-5 space-x-2 rtl:space-x-reverse">
                        <div>
                            <label htmlFor="code-1" className="sr-only">First code</label>
                            <input type="text" maxLength="1" data-focus-input-init data-focus-input-next="code-2"
                                   id="code-1"
                                   className="block w-12 h-12 py-3 text-sm font-extrabold text-center border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="code-2" className="sr-only">Second code</label>
                            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-1"
                                   data-focus-input-next="code-3" id="code-2"
                                   className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="code-3" className="sr-only">Third code</label>
                            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-2"
                                   data-focus-input-next="code-4" id="code-3"
                                   className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="code-4" className="sr-only">Fourth code</label>
                            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-3"
                                   data-focus-input-next="code-5" id="code-4"
                                   className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="code-5" className="sr-only">Fifth code</label>
                            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-4"
                                   data-focus-input-next="code-6" id="code-5"
                                   className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="code-6" className="sr-only">Sixth code</label>
                            <input type="text" maxLength="1" data-focus-input-init data-focus-input-prev="code-5"
                                   id="code-6"
                                   className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   required/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Code;