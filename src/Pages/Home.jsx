import { ChakraProvider } from "@chakra-ui/react";
 import { Image, Box,SimpleGrid} from "@chakra-ui/react";
// import { ProductDetail } from "./ProductDetail";
// import NavBar from "../components/NavBar";
// import CartWidget from "../components/CartWidget";
// import Card from "../components/Card";
// import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
    <ChakraProvider>
     
      <SimpleGrid
       columns={{ sm: 6, md: 6 }}>
       <Box >
       <Image src='https://i.pinimg.com/564x/73/78/a8/7378a873cf987055a55faae56020f9a8.jpg' alt='RopaHome'
        objectFit='cover'
       />
       </Box>
      
       </SimpleGrid>
        


    </ChakraProvider>
    </>
  );
};

export default Home;
