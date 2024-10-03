import {useEffect} from "react";
import {initFlowbite} from "flowbite"
import Navbar from "./compoments/Navbar.jsx";
import Endbar from "./compoments/Endbar.jsx";
import {Route, Routes} from "react-router-dom";
import Hub from "./pages/Hub.jsx";
import IndexTYV from "./pages/protection_tyv/IndexTYV.jsx";
import Missing from "./Missing.jsx";
import DetailItem from "./pages/DetailItem.jsx";
import PDFViewer from "./pages/PDFViewer.jsx";
import Contact from "./pages/Contact.jsx";
import Lunettes from "./pages/protection_tyv/Lunettes.jsx";
import IndexBOCA from "./pages/protection_auditive/IndexBOCA.jsx";
import IndexR from "./pages/protection_respiratoire/IndexR.jsx";
import IndexG from "./pages/protection_mains/IndexG.jsx";
import IndexC from "./pages/protection_pieds/IndexC.jsx";
import IndexV from "./pages/protection_corps/IndexV.jsx";
import IndexA from "./pages/protection_antichute/IndexA.jsx";
import IndexComp from "./pages/protection_comp/IndexComp.jsx";
import Login from "./pages/Login.jsx";
import Burreau from "./pages/Burreau.jsx";
import Forbidden from "./Forbidden.jsx";
import AddUser from "./pages/AddUser.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import RequireToken from "./auth/RequireToken.js";
import RequireEmail from "./auth/RequireEmail.js";
import ChangePswd from "./pages/ChangePswd.jsx";
import ForgotPswd from "./pages/ForgotPswd.jsx";
import Activation from "./pages/Activation.jsx";
import Validation from "./pages/Validation.jsx";
import RequireAuth from "./auth/RequireAuth.js";

function App() {
    // const ROLES = {
    //     'CEO': "CEO",
    //     'DEV': "DEV",
    //     'ADMIN': "ADMIN"
    // }
    useEffect(()=>{
        initFlowbite();
    }, []);
  return (
    <main>
        <Navbar/>
            <Routes>
                <Route exact path="/" element={<Hub/>}/>
                <Route exact path="Login" element={<Login/>} />
                <Route exact path="validation" element={<Validation/>}/>
                <Route exact path="forgotPswd" element={<ForgotPswd/>}/>
                <Route exact path="activation" element={<Activation/>}/>

                <Route exact path="protection-de-la-tete-des-yeux-et-du-visage" element={<IndexTYV/>}/>
                <Route exact path="protection-des-lunettes" element={<Lunettes/>}/>
                <Route exact path="protection-auditive" element={<IndexBOCA/>}/>
                <Route exact path="protection-respiratoire" element={<IndexR/>}/>
                <Route exact path="protection-des-mains" element={<IndexG/>}/>
                <Route exact path="protection-des-pieds" element={<IndexC/>}/>
                <Route exact path="protection-du-corps" element={<IndexV/>}/>
                <Route exact path="protection-antichute-longes" element={<IndexA/>}/>
                <Route exact path="completer-sa-protection" element={<IndexComp/>}/>
                <Route exact path="detail-item" element={<DetailItem/>}/>
                <Route exact path="pdf" element={<PDFViewer/>}/>
                <Route exact path="contacter-nous" element={<Contact/>}/>
                <Route path="*" element={<Missing/>} />


                <Route element={<RequireToken/>}>
                    <Route exact path="Burreau" element={<Burreau/>} />
                    <Route exact path="addproduct" element={<AddProduct/>}/>

                    <Route element={<RequireAuth allowedRoles={["CEO","DEV"]} />}>
                    <Route exact path="adduser" element={<AddUser/>} />
                    </Route>

                    <Route path="forbidden" element={<Forbidden/>} />
                </Route>

                <Route element={<RequireEmail/>}>
                    <Route exact path="changePassword" element={<ChangePswd/>}/>
                </Route>
            </Routes>
        <Endbar/>
    </main>
  )
}

export default App
