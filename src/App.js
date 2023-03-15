
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

import CartWidget from './components/CartWidget';
import './App.modules.css';
import NavBar from './components/NavBar';
// import ComponenteA from './components/ComponenteA';


function App() {
  
  return (
    <ChakraProvider>

    {/* <ComponenteA/> */}
    <CartWidget/>
    <NavBar/>
    {/* <itemListContainer/> */}

    </ChakraProvider>
  );
}

export default App;