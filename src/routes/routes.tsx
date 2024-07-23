import { BrowserRouter, Routes, Route } from "react-router-dom";

//importando a página home
import { Home } from "../pages/Home";

export function Navegation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}