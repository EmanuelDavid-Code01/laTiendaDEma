 import { Button, MenuButton, MenuList, MenuItem, Menu } from "@chakra-ui/react";

const NavBar = () => {
  return (
    
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
  <div className="container-fluid">
    <a className="nav-link active" href="/">Home</a>
    <Button colorScheme="red" href="/ofertas"
    >Ofertas</Button>
    
      <span className="navbar-toggler-icon"></span>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <Menu>
        <MenuButton as={Button}>Categorias</MenuButton>
        <MenuList>
          <MenuItem>Ropa de invierno</MenuItem>
          <MenuItem>Ropa de verano</MenuItem>
          <MenuItem>Short</MenuItem>
          <MenuItem>Musculosas</MenuItem>
          <MenuItem>Zapatillas</MenuItem>
        </MenuList>
      </Menu>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
       
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
};

export default NavBar;
