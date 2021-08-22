import { useState } from 'react';
import { Nav, Hamburguer, Menu, Img } from './styles';
import img from '../../assets/imgLogo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavLink to="/">
        Movies App <Img src={img} alt="Logo do Site" />
      </NavLink>
      <Hamburguer onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburguer>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categorias">Categorias</NavLink>
        <NavLink to="/favoritos">Favoritos</NavLink>
        <NavLink to="/assistirdepois">Assistir depois</NavLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
