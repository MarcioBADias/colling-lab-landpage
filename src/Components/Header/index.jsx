import React from 'react'
import { HeaderContainer, Logo, Nav, NavLink } from './style'
import { useMenu } from '../../hooks/useMenu'
import { FaBars } from 'react-icons/fa' // Exemplo de React Icon
import { Link } from 'react-scroll'

const Header = () => {
  const { isOpen, toggleMenu, closeMenu } = useMenu()

  return (
    <HeaderContainer>
      <Logo>LOGO</Logo>
      {/* Botão para abrir/fechar o menu em dispositivos móveis */}
      <FaBars onClick={toggleMenu} style={{ cursor: 'pointer' }} />
      <Nav isOpen={isOpen}>
        <NavLink
          as={Link}
          to="features"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Funcionalidades
        </NavLink>
        <NavLink
          as={Link}
          to="pricing"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Preços
        </NavLink>
        <NavLink
          as={Link}
          to="testimonials"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Depoimentos
        </NavLink>
        <NavLink href="#contact" onClick={closeMenu}>
          Contato
        </NavLink>
      </Nav>
    </HeaderContainer>
  )
}

export { Header }
