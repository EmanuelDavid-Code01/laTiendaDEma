//Detalle del producto en si 

import {useParams} from "react-router-dom"
import {
  Card,
  CardBody,
  Heading,
  Divider,
  Stack,
  Image,
  Text,
  CardFooter,
  ButtonGroup,
  Button,ChakraProvider
} from "@chakra-ui/react";

import { ProductsData } from "../json";


export const ProductDetail = () => {
  const {productId} = useParams();                         //Busca el Id que recibe de parametro como ruta
  const producto = ProductsData.find((p) => p.id === productId); 
  // find y lo va a estar buscando en ProductsData es el buscador dentro del array que encontramos en products.js (Json)

   if (!producto) {
     return <div>Producto no encontrado</div>;
     
   }

   
  return (   <>
  <ChakraProvider>           
    <div className="detalle-producto">
      <Card maxW="sm">
        <CardBody>
          <Image src={producto.Imagen} alt={producto.nombre} />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>{producto.descripcion}</Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Agregar al carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
    
    </ChakraProvider>
    </>
  );
};
// Lo que hace es que, cuando lo encuentra, muestra el producto en particular, si no lo encuentra muestra producto no encontrado error 404