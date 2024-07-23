import { createBrowserRouter} from "react-router-dom";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/sobre/Sobre";
import { PontosTuristicos } from "../pages/pontosTuristicos/PontosTuristicos";
import { Artesanato } from "../pages/artesanato/Artesanato";

const Navigation = createBrowserRouter([
    { 
    path: "/", 
    element: <Home /> 
    },

    {
      path: "/sobre",
      element: <Sobre />
    },

    {
      path: "/pontosTuristicos",
      element: <PontosTuristicos />
    },

    {
      path: "/artesanato",
      element: <Artesanato />
    },
]);

export default Navigation;