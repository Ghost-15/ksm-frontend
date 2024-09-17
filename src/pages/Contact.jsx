import Formulaire from "../compoments/Formulaire.jsx";

function Contact() {
    return (
        <div className="h-full">
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

export default Contact;