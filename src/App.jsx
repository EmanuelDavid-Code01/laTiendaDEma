
import {MainRouter} from"./Routes/MainRouter";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  
  return (

<ChakraProvider>
    <MainRouter/>
    </ChakraProvider>
  );
}

export default App;