
import {useParams} from "react-router-dom"
import { ProductsData } from "../json";
import { Products } from "./Products";


export const ProductDetail = () => {
  const {productId} = useParams();                         //Busca el Id que recibe de parametro como ruta
  const producto = ProductsData.find((p) => p.id === productId); 
  // find y lo va a estar buscando en ProductsData es el buscador dentro del array que encontramos en products.js (Json)

   if (!producto) {
     return <div>Producto no encontrado</div>;
     
   }

  return (   <>
           <div className="card">
        {/* <Box>
               <Heading as="h4" size="md">
              <Link to ={{/products/:productId}}> nuestro producto</Link>
             </Heading> 
      </Box> */}
          <img
            src={Products.imagen} 
            className="card-img-top"
            alt={producto.nombre}
          />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <a href="/products" class="btn btn-primary">
              {producto.nombre}
            </a>
          </div>
        </div>
   
    
    
    </>
  );
};
export default ProductDetail;
// Lo que hace es que, cuando lo encuentra, muestra el producto en particular, si no lo encuentra muestra producto no encontrado error 404
  //  <div className="detalle-producto">
  //   <Card maxW="sm">
  //     <CardBody>
  //       <Image src={producto.Imagen} alt={producto.nombre} />
  //       <Stack mt="6" spacing="3">
  //         <Heading size="md">Living room Sofa</Heading>
  //         <Text>{producto.descripcion}</Text>
  //         <Text color="blue.600" fontSize="2xl">
  //           $450
  //         </Text>
  //       </Stack>
  //     </CardBody>
  //     <Divider />
  //     <CardFooter>
  //       <ButtonGroup spacing="2">
  //         <Button variant="solid" colorScheme="blue">
  //           Agregar al carrito
  //         </Button>
  //       </ButtonGroup>
  //     </CardFooter>
  //   </Card>
  // </div> 