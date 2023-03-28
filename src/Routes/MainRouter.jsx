import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ofertas from "../Pages/Ofertas";
import Home from "../Pages/Home";

import NavBar from "../components/NavBar";
import { ProductDetail } from "../Pages/ProductDetail";
import { Products } from "../Pages/Products";

// import CartWidget from "../components/CartWidget";

export const MainRouter = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/ofertas" element={<Ofertas />} />
        <Route exact path="/products" element={<Products/>} /> 
        <Route exact path= "/products/:productId" element={<ProductDetail />} />        
       

      </Routes>

    </Router>
  );
};

export default MainRouter;

 //Productos en general Parametro por URL que recibimos es :productId */}

       // <Route exact path="/products/:producto.id" element={<ProductDetail />} /> 