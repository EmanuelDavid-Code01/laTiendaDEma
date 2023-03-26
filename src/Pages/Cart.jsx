import React from 'react'

import { ChakraProvider,Box } from "@chakra-ui/react";
const Cart = ({ nombre, descripcion,id }) => {
  return (
    <>
    
    <ChakraProvider>
    <div>Aqui va a estar la pagina de elementos comprados</div>
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
            <a href="/products" class="btn btn-primary">{id}
              Remera
            </a>
          </div>
        </div>
    
    </ChakraProvider>
    
    
    </>
  )
}

export default Cart