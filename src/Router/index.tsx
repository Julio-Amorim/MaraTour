import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/sobre/Sobre";
import { PontosTuristicos } from "../pages/pontosTuristicos/PontosTuristicos";
import { Artesanato } from "../pages/artesanato/Artesanato";
import { Culinaria } from "../pages/culinaria/Culinaria";
import { Festas } from "../pages/festas/Festas";

const Navigation = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/sobre",
        element: <Sobre />,
    },

    {
        path: "/pontosTuristicos",
        element: <PontosTuristicos />,
    },

    {
        path: "/artesanato",
        element: <Artesanato />,
    },

    {
        path: "/festas",
        element: <Festas />,
    },

    {
        path: "/culinaria",
        element: <Culinaria />,
    },
]);

export default Navigation;
