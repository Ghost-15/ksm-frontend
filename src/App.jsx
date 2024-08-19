import {useEffect} from "react";
import {initFlowbite} from "flowbite"
import Navbar from "./compoments/Navbar.jsx";
import Endbar from "./compoments/Endbar.jsx";
import {Route, Routes} from "react-router-dom";
import Hub from "./pages/Hub.jsx";
import Visage from "./pages/Visage.jsx";
import Missing from "./Missing.jsx";

function App() {
    useEffect(()=>{
        initFlowbite();
    }, []);
  return (
    <main>
        <Navbar/>
            <Routes>
                <Route exact path="/" element={<Hub/>}/>
                <Route exact path="/protection_de_la_tete" element={<Visage/>}/>
                <Route path="*" element={<Missing/>} />
            </Routes>
        <Endbar/>
    </main>
  )
}

export default App
