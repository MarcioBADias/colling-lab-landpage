import styled from 'styled-components'

// Definindo o estilo do FormSection
export const FormContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px;
  background-color: var(--color-secondary-light);
  color: #000;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`

export const FormText = styled.div`
  max-width: 500px;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }

  span {
    color: var(--color-secondary-dark);
  }

  button {
    padding: 15px 30px;
    font-size: 1rem;
    background-color: transparent;
    border: 3px solid var(--color-secondary-dark);
    color: #000;
    cursor: pointer;
    border-radius: 15px;
    transition: background-color 0.3s ease;

    &:hover {
      border: 3px solid var(--color-primary-dark);
      color: var(--color-primary-dark);
    }
  }
`
