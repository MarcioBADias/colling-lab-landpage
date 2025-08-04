import styled from 'styled-components'

export const ButtonContainer = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366; /* Cor oficial do WhatsApp */
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 100; /* Garante que o botão fique acima de outros elementos */
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`
