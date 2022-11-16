import {BrowserRouter, Routes, Route} from "react-router-dom";


// LAYOUT
import Header from "./layout/Header";
import Footer from "./layout/Footer";


// PAGES
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Movie from "./pages/Movie";
import Seasson from "./pages/Seasson";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home/> } /> 
                <Route path="/favoritos" element={ <Favoritos/> } /> 
                <Route path="/filmes/:id" element={ <Movie/> } /> 
                <Route path="/series/:id" element={ <Seasson/> } /> 
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;