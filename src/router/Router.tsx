
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Products from "../pages/Products";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
