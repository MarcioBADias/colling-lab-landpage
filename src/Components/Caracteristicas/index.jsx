import {
  CaracteristicaCard,
  CaracteristicasContainer,
  CaracteristicasWrapper,
} from './style'

const Caracteristicas = () => {
  const featureList = [
    {
      title: 'Diferencial',
      description:
        '🧩 Aulas sobre as cinco competências, explicadas do ponto de vista de quem avalia',
    },
    {
      title: 'Referência',
      description: '🧠 Análises de redações reais com correções comentadas',
    },
    {
      title: 'Método',
      description:
        '📊 Técnicas para construir textos com foco no olhar dos avaliadores.',
    },
  ]

  return (
    <CaracteristicasContainer id="features">
      <h2>O que você vai encontrar</h2>
      <CaracteristicasWrapper>
        {featureList.map((feature, index) => (
          <CaracteristicaCard key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </CaracteristicaCard>
        ))}
      </CaracteristicasWrapper>
    </CaracteristicasContainer>
  )
}

export { Caracteristicas }
