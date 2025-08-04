import React from 'react'
import { DestaqueContainer, DestaqueImage, DestaqueText } from './style'

const Destaque = () => {
  return (
    <DestaqueContainer>
      <DestaqueImage>
        <img
          src="./Logo Collig Lab - fundo png.png" // Substitua pela imagem real
          alt="Logo"
        />
      </DestaqueImage>
      <DestaqueText>
        <h1>
          Faltam poucos dias para o <span>ENEM 2025</span>. Estudar estrutura
          pronta agora não te levará à nada
        </h1>
        <p>
          Vamos te ensinar como seu texto é avaliado{' '}
          <span>
            <strong>
              para você identificar o que o corretor procuraria de erro mas não
              vai encontrar
            </strong>
          </span>
        </p>
        <a
          href="https://escolacolling.hotmart.host/pagina-de-vendas-0ea6cfe2-06fd-45ed-aa3e-279e5d830d52"
          target="_blank"
        >
          <button>Inscreva-se já na turma de setembro</button>
        </a>
      </DestaqueText>
    </DestaqueContainer>
  )
}

export { Destaque }
