import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../pages/Home";

const Navigation = () => (
    <BrowserRouter>
        <Route path="/" element={<Home />} />
    </BrowserRouter>
);

export default Navigation;