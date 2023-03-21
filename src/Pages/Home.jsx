import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import CartWidget from "../components/CartWidget";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <ChakraProvider>
      <div>
        {" "}
        <h1>Este es el Home</h1>
      </div>
      {<NavBar />}
      {<CartWidget />}
      {<Cards />}
    </ChakraProvider>
  );
};

export default Home;
