import { createBrowserRouter} from "react-router-dom";
import { Home } from "../pages/Home";

const Navigation = createBrowserRouter([
  { 
    path: "/", 
    element: <Home /> },
]);

export default Navigation;