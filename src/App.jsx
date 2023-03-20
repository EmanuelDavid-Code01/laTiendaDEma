
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

import CartWidget from './components/CartWidget';
import './App.modules.css';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
// import ComponenteA from './components/ComponenteA';


function App() {
  
  return (
    <ChakraProvider>

    
    {<NavBar/>}
    {<CartWidget/>}
    {<Cards/>}


    {/* <itemListContainer/> */}
    {/* <ComponenteA/> */}

    </ChakraProvider>
  );
}

export default App;