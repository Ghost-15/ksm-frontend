import {useEffect} from "react";
import {initFlowbite} from "flowbite"
import Navbar from "./compoments/Navbar.jsx";
import Endbar from "./compoments/Endbar.jsx";
import {Route, Routes} from "react-router-dom";
import Hub from "./pages/Hub.jsx";
import TeteVisage from "./pages/protection_tete_visage/TeteVisage.jsx";
import Missing from "./Missing.jsx";
import DetailItem from "./pages/DetailItem.jsx";
import PDFViewer from "./pages/PDFViewer.jsx";
import Contact from "./pages/Contact.jsx";
import Lunettes from "./pages/protection_tete_visage/Lunettes.jsx";

function App() {
    useEffect(()=>{
        initFlowbite();
    }, []);
  return (
    <main>
        <Navbar/>
            <Routes>
                <Route exact path="/" element={<Hub/>}/>
                <Route exact path="/protection-de-la-tete-et-du-visage" element={<TeteVisage/>}/>
                <Route exact path="/protection-des-lunettes" element={<Lunettes/>}/>
                <Route exact path="/detail-item" element={<DetailItem/>}/>
                <Route exact path="/pdf" element={<PDFViewer/>}/>
                <Route exact path="/contacter-nous" element={<Contact/>}/>
                <Route path="*" element={<Missing/>} />
            </Routes>
        <Endbar/>
    </main>
  )
}

export default App
