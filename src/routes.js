import {BrowserRouter, Routes, Route} from "react-router-dom";


// LAYOUT
import Header from "./layout/Header";


// PAGES
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home/> } /> 
                <Route path="/favoritos" element={ <Favoritos/> } /> 
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;