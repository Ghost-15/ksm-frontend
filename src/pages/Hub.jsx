import NosProduits from "../compoments/NosProduits.jsx";
import Formulaire from "../compoments/Formulaire.jsx";
import {Helmet} from "react-helmet";

function Hub() {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Vente des equipements et vêtements de sécurité" />
                <title>KongoSafeManagement Shop - Vente specialise des EPI</title>
            </Helmet>

            <section className="h-screen mt-5 flex flex-col container mx-auto bg-[#E0E0E0] rounded-[59px] pt-16 px-10 md:items-center md:px-20 md:pt-[68px] md:flex-row md:justify-between gap-10 z-30 shadow-2xl">
                <div className="flex flex-col items-start text-black md:pb-[68px] z-10  ">
                    <h1 className="text-4xl font-black  leading-[125%] sm:text-5xl md:text-[96px] md:leading-[125%]  ">
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white relative inline-block">
                            <span className="relative text-black">VENTE</span>
                        </span>
                        <br/>SPECIALISE<br/>
                        <span className="relative after:w-[120%] after:h-full after:bg-primary after:block after:absolute after:-z-10 after:top-0 after:-rotate-2">
                        DES EPI</span>
                        <br/>
                    </h1>
                    <p className="md:text-[32px]">Des equipements performants au prix adéquat</p>
                    {/*<div className="flex flex-col md:flex-row md:items-center justify-evenly gap-9 pt-8">*/}
                    {/*    <div className="w-1/2 h-1/2">*/}
                    {/*        <img className="" src="./images/banner-image-2.png" alt="banner image" srcSet=""/>*/}
                    {/*    </div>*/}
                    {/*    <a className="bg-black text-white rounded-md py-4 px-4 text-center" href="#">Shop Now</a>*/}
                    {/*</div>*/}
                </div>
                <div className="">
                    <img className="sm:w-48 md:w-96 lg:w-full rounded-xl" src="/hero.jpg" alt="banner image"/>
                </div>
            </section>

            <h1 className="mt-10 flex justify-center text-5xl font-bold text-[#3399FF] ">Nos produits</h1>
            <h2 className="text-xl text-black flex justify-center">pour assurer votre sécurité</h2>

            <NosProduits/>

        {/*    <div className='grid grid-cols-3'>*/}
        {/*        <div className='flex flex-col justify-center'>*/}
        {/*            <h1 className='md:text-4xl sm:text-3xl text-[#3399FF] text-2xl font-bold py-2'>*/}
        {/*                Découvrez notre gamme,*/}
        {/*                <br/>contre les impacts !*/}
        {/*            </h1>*/}
        {/*            <p>*/}
        {/*                snfinefnperngakefgnocso;ergjoishrose;ogn;sohrgyrekhgbjdbf*/}
        {/*                <br/>*/}
        {/*                bdhbgsrgbcejcrnvboieyrtql;urgvnihjuhajfvdavmna7rtywiaevri*/}
        {/*                <br/>*/}
        {/*                ajdhfbcrietnvuresigtc*/}
        {/*            </p>*/}
        {/*        </div>*/}


        {/*        <div id="default-carousel" className="relative w-full" data-carousel="slide">*/}
        {/*            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">*/}
        {/*                <div className="hidden duration-700 ease-in-out" data-carousel-item="">*/}
        {/*                    <img src="/produits/ptv/lunettesBengale.png"*/}
        {/*                         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
        {/*                         alt="..."/>*/}
        {/*                </div>*/}
        {/*                <div className="hidden duration-700 ease-in-out" data-carousel-item="">*/}
        {/*                    <img src="/produits/securite_noire.jpg"*/}
        {/*                         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
        {/*                         alt="..."/>*/}
        {/*                </div>*/}
        {/*                <div className="hidden duration-700 ease-in-out" data-carousel-item="">*/}
        {/*                    <img src="/produits/securite_orange.jpg"*/}
        {/*                         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
        {/*                         alt="..."/>*/}
        {/*                </div>*/}
        {/*                <div className="hidden duration-700 ease-in-out" data-carousel-item="">*/}
        {/*                    <img src="/produits/protection_tissus.jpg"*/}
        {/*                         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
        {/*                         alt="..."/>*/}
        {/*                </div>*/}
        {/*                <div className="hidden duration-700 ease-in-out" data-carousel-item="">*/}
        {/*                    <img src="/produits/ptv/facebolleBLV.jpg"*/}
        {/*                         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
        {/*                         alt="..."/>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">*/}
        {/*                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"*/}
        {/*                        data-carousel-slide-to="0"></button>*/}
        {/*                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"*/}
        {/*                        data-carousel-slide-to="1"></button>*/}
        {/*                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"*/}
        {/*                        data-carousel-slide-to="2"></button>*/}
        {/*                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"*/}
        {/*                        data-carousel-slide-to="3"></button>*/}
        {/*                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"*/}
        {/*                        data-carousel-slide-to="4"></button>*/}
        {/*            </div>*/}
        {/*            <button type="button"*/}
        {/*                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"*/}
        {/*                    data-carousel-prev="">*/}
        {/*<span*/}
        {/*    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">*/}
        {/*    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"*/}
        {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">*/}
        {/*        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
        {/*              d="M5 1 1 5l4 4"/>*/}
        {/*    </svg>*/}
        {/*    <span className="sr-only">Previous</span>*/}
        {/*</span>*/}
        {/*            </button>*/}
        {/*            <button type="button"*/}
        {/*                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"*/}
        {/*                    data-carousel-next="">*/}
        {/*<span*/}
        {/*    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">*/}
        {/*    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"*/}
        {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">*/}
        {/*        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
        {/*              d="m1 9 4-4-4-4"/>*/}
        {/*    </svg>*/}
        {/*    <span className="sr-only">Next</span>*/}
        {/*</span>*/}
        {/*            </button>*/}
        {/*        </div>*/}

        {/*</div>*/}

            <div className="mt-10 w-full bg-[#E0E0E0] text-center font-bold items-center justify-center">
                <p className='py-5 md:text-4xl sm:text-3xl text-center'>
                    Nos Services</p>
                <div className='w-full py-16 px-4'>
                    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
                        <div className='flex flex-col justify-center'>
                            <h1 className='md:text-4xl sm:text-3xl text-[#3399FF] text-2xl font-bold py-2'>
                                Vente, equipement
                                <br/>et materiere de securite
                            </h1>
                            <p>
                                Dans un monde où les risques sont omniprésents,
                                il est essentiel de garantir la protection de vos employés et de vos infrastructures.
                            </p>
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h1 className='md:text-4xl sm:text-3xl text-[#3399FF] text-2xl font-bold py-2'>
                                Formation
                                <br/>HSE
                            </h1>
                            <p>
                                Des sessions de formation régulières et des exercices de simulation peuvent
                                grandement améliorer la préparation et la réactivité en cas d&apos;incident.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className='w-full bg-[#E0E0E0] py-16 px-4'>*/}
            {/*    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>*/}
            {/*        <div className='flex flex-col justify-center'>*/}
            {/*            <img className='w-[500px] mx-auto my-4' src="/questmark.jpg" alt='why'/>*/}
            {/*        </div>*/}

            {/*        <div className='flex flex-col justify-center'>*/}
            {/*            <h1 className='md:text-4xl sm:text-3xl text-[#3399FF] text-2xl font-bold py-2'>*/}
            {/*                Pourquoi KongoSafeManagement ?*/}
            {/*                <br/>qualite, performance*/}
            {/*                <br/>et satisfaction client*/}
            {/*            </h1>*/}
            {/*            <p>*/}
            {/*                Developing ourselves to be recognized as a service company and partner of a choice in Congo*/}
            {/*                and in the Sub-region oil & gas industry for delivering wireline & slickline services*/}
            {/*                and bringing value to our industry and our community.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="w-full text-center font-bold items-center justify-center mt-5">
                <p className='md:text-4xl sm:text-3xl text-center'>
                    Notre partenaire</p>
                    <div className='grid grid-cols-3 justify-items-center'>
                        <div className='flex flex-col'>
                        </div>
                        <div className='flex flex-col'>
                            <img src="/group-rg.jpg" className="block w-full w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] object-cover" alt=""/>
                        </div>
                        <div className='flex flex-col'>
                        </div>
                    </div>
            </div>

            <section className="flex flex-col bg-blue-900 items-center py-10 bg-primary">
                <h4 className="text-3xl font-black text-white text-center tracking-[1.7px] mb-8 md:leading-[70px] md:text-[55px]  ">
                    Vous ne trouvez pas<br/>ce que vous cherchez ?</h4>
                <p className="text-xl text-center text-white font-normal md:leading-9 tracking-[1px] md:text-[32px]">
                    Remplissez les détails ci-dessous</p>

                <Formulaire/>
            </section>

        </div>
    );
}

export default Hub;