import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: var(--color-primary-light);
  color: #fff;
  position: fixed;
  width: 100vw;
  z-index: 99;

  // Estilo para o ícone de menu em dispositivos móveis
  svg {
    display: none;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
    svg {
      display: block;
    }
  }
`

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px; // Ajuste este valor conforme o tamanho do seu header
    left: 0;
    right: 0;
    background: var(--color-primary-light);
    flex-direction: column;
    align-items: center;
    padding: 20px;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`
