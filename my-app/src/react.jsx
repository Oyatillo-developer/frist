import { Routes, Route } from "react-router-dom";
import Abaut from "./page/signup";
import Login from "./page/login";
import Page from "./page/page";

function Proyect() {
    return ( <>
    <Routes>
        <Route path="/" element={<> <Abaut/> </>}/>
        <Route path="/signup" element={<> <Abaut/> </>}/>
        <Route path="/login" element={<> <Login/> </>}/>
        <Route path="/page" element={<> <Page/> </>}/>
    </Routes>
    </> );
}

export default Proyect;