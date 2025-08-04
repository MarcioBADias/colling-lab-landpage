import React, { forwardRef } from 'react'
import { DestaqueContainer, DestaqueImage, DestaqueText } from './style'

const Destaque = forwardRef((props, ref) => {
  return (
    <DestaqueContainer ref={ref}>
      <DestaqueImage>
        <img src="./Logo Collig Lab - fundo png.png" alt="Logo" />
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
        <button>Inscreva-se já na turma de setembro</button>
      </DestaqueText>
    </DestaqueContainer>
  )
})

export { Destaque }
