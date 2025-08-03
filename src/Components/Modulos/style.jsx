import styled from 'styled-components'

export const CourseContainer = styled.section`
  padding: 60px 100px;
  background-color: var(--color-light);
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    font-weight: 700;
    color: var(--color-dark);
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

export const CourseContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ModuleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px; /* Aumentei o espaço para a nova estrutura */
  max-width: 1000px;
  width: 100%;
`

export const ModuleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 40px; /* Espaço entre o texto e a imagem */
  background-color: ${({ isActive }) =>
    isActive ? 'var(--color-secondary-light)' : 'white'};
  color: ${({ isActive }) =>
    isActive ? 'var(--color-dark)' : 'var(--color-dark)'};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  // Altera a direção com base na propriedade 'isReversed'
  flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
  }

  .image-wrapper {
    flex-shrink: 0; // Impede que a imagem encolha
  }

  img {
    border-radius: 10px;
    width: 250px;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.05); // Pequeno zoom na imagem ao passar o mouse
    }
  }

  @media (max-width: 768px) {
    /* flex-direction: column; // Volta a empilhar a imagem e o texto em telas pequenas
    text-align: center; */
    h3 {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.75rem;
      line-height: 1.4;
    }

    img {
      width: 150px;
      height: auto;
    }

    .image-wrapper {
      margin-bottom: 20px;
    }
  }
`
