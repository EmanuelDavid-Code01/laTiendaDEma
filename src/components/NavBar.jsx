import {
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Box,
  Heading,
  Link
} from "@chakra-ui/react";
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
        <div className="container-fluid">
          <CartWidget/>
          <Box
            as="button"
            borderRadius="md"
           
            color="white"
            px={4}
            h={8}
          >
            <Heading as="h4" size="md">
              <Link href="/">HOME</Link>
            </Heading>
          </Box>


          <span className="navbar-toggler-icon"></span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Box
            as="button"
            borderRadius="md"
            
            color="white"
            px={4}
            h={8}
          >
            <Heading as="h4" size="md">
              <Link href="/ofertas">Ofertas</Link>
            </Heading>
            
          </Box>
          <Box
            as="button"
            borderRadius="md"
           
            color="white"
            px={4}
            h={8}
          >
            <Heading as="h4" size="md">
              <Link href="/Cart">Productos</Link>
            </Heading>
          </Box>

          <Box borderRadius="md"px={4}
            h={8}>
            <Menu>
              <MenuButton as={Button} color="white">Categorias</MenuButton>
              <MenuList>
              <Link href="/">
                <MenuItem>Ropa de invierno</MenuItem>
                </Link>
                <Link href="/ofertas">
                <MenuItem>Ropa de verano</MenuItem>
                </Link>
                <Link href="/ofertas">
                <MenuItem>Short</MenuItem>
                </Link>
                <Link href="/ofertas">
                <MenuItem>Musculosas</MenuItem>
                </Link>
                <Link href="/ofertas">
                <MenuItem>Zapatillas</MenuItem>
                </Link>
              </MenuList>
            </Menu>
            </Box>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
