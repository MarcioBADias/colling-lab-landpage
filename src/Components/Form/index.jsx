import React from 'react'
import { FormContainer, FormText } from './style'

const Form = () => {
  return (
    <FormContainer>
      <FormText>
        <h1>
          Somos a <span>Colling Lab: Escola de Redação.</span> O único curso de
          redação focado no que ninguém te ensina: o olhar do corretor.
        </h1>
        <p>Não decore a redação. Decifre a correção.</p>
        <span>
          O segredo não está só na estrutura. Está no olhar atento durante e
          após a escrita!
        </span>
        <p>
          Saia na frente e desenvolva essa habilidade! Condições especiais para
          turma de setembro.
        </p>
        <a
          href="https://escolacolling.hotmart.host/pagina-de-vendas-0ea6cfe2-06fd-45ed-aa3e-279e5d830d52"
          target="_blank"
        >
          <button>Inscreva-se já na turma de setembro</button>
        </a>
      </FormText>
    </FormContainer>
  )
}

export { Form }
