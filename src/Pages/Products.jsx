import React from "react";
import {ProductsData} from "../json/products";
import {Card} from "../components/Card";


export const Products = () => {

  return (
    
    <div className="productos">
    {ProductsData.map((producto)=>(
      <Card Key={producto.id} producto = {producto}/>
      ))}
    </div>
  
  
  );
};
// este return toma la VARIABLE definida como ProductsData de products.js (ya definida)
//por esta razon tenemos que traera importandola import {ProductsData} from "../json";

// ProductsData.map((producto)=>(   de la variable producto lo que va a hacer es devolverme una CARD POR cada PRODUCTO 2/5 etc
//los que pueda llegar a tener de (products.js que esta el Array)(Key es el producto.id)