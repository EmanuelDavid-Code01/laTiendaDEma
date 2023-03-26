//en card tenemos que aplicar el link de lugar donde vamos a encontrar los productos
import React from "react";
import { ChakraProvider,Box } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

export const Card = ({ nombre, descripcion, id }) => {
  return (
    <ChakraProvider>
        <div className="card">
      <Box>
              {/* <Heading as="h4" size="md">
              <Link to ={"/products/${producto.id}"}> nuestro producto</Link>
             </Heading> */}
      </Box>
          <img
            src="src={producto.imagen} "
            className="card-img-top"
            alt="{producto.nombre}"
          />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{descripcion}</p>
            <a href="/products" class="btn btn-primary">
              {id}
            </a>
          </div>
        </div>
    </ChakraProvider>
  );
};


  /* Y mostramos los datos que vienen por parametro
  export const Cards =                ( DE ESTA FORMA)  */
