import { useState } from 'react'
import { CourseContainer, CourseContent, ModuleList, ModuleItem } from './style'

const courseModules = [
  {
    id: 'module-1',
    title: 'Módulo 1: Início da Jornada: Descobrindo o Olhar do Corretor',
    description:
      'Introdução à proposta do curso e à metodologia de autocorreção.',
  },
  {
    id: 'module-2',
    title: 'Módulo 2: Autocorreção em Ação (Competência 1)',
    description:
      'Neste módulo, você vai muito além da gramática: vai entender como a banca avalia o uso da norma culta em diversos aspectos. Você aprenderá a identificar e corrigir os desvios mais penalizados por corretores, desenvolvendo clareza, precisão e domínio da estrutura formal da língua.',
  },
  {
    id: 'module-3',
    title:
      'Módulo 3: Leitura Estratégica — Compreender para Produzir Melhor (Competência 2)',
    description:
      'Muito mais do que “entender os textos”, essa competência exige que você saiba extrair e aproveitar ideias com propósito. O corretor observa como você interpretou o tema central, se faz uso superficial dos textos motivadores ou não desenvolve um ponto de vista claro — falhas que rebaixam a nota mesmo em textos bem escritos.',
  },
  {
    id: 'module-4',
    title: 'Módulo 4 (Competência 3)',
    description:
      'O corretor não está em busca só de bons argumentos. Aqui, você descobre que dar exemplos aleatórios ou “jogar dados” sem função no texto pode derrubar sua pontuação, mesmo quando a estrutura parece boa.',
  },
  {
    id: 'module-5',
    title: 'Módulo 5: Coesão Sem Clichê (Competência 4)',
    description:
      'Conectivos óbvios ou repetitivos não garantem coesão. O corretor observa se as ideias fluem com naturalidade, se há repetições desnecessárias, uso mecânico de conectores ou quebra de sentido entre parágrafos. Neste módulo, você aprende a manter o texto “costurado” de forma eficaz e sem parecer artificial.',
  },
  {
    id: 'module-6',
    title:
      'Módulo 6: Planejamento Social — Transformando Ideias em Soluções Práticas (Competência 5)',
    description:
      'O erro mais comum aqui é achar que basta sugerir algo. O corretor avalia quem faz o quê, como, com qual finalidade e para quem. Neste módulo, você aprende a montar uma proposta completa, pertinente e viável — e evita perder pontos por omissões que muita gente nem percebe que comete.',
  },
  {
    id: 'module-7',
    title:
      'Módulo 7: Vírgula sem Trauma de Um Jeito que Você Nunca Viu - Aula Bônus Ao Vivo',
    description:
      'Revisão prática e descomplicada sobre o uso da vírgula, de um jeito dinâmico e interativo.',
  },
  {
    id: 'module-8',
    title:
      'Módulo 8: Conhecimentos aplicados em sua redação - Aula Bônus ao vivo',
    description:
      'Sessão de correção comentada, em que você testa seu olhar de corretor na própria redação.',
  },
]

const Modulos = () => {
  const [activeModule, setActiveModule] = useState(null)

  return (
    <CourseContainer id="course-structure">
      <h2>Estrutura do Curso</h2>
      <CourseContent>
        <ModuleList>
          {courseModules.map((module, index) => (
            <ModuleItem
              key={module.id}
              onMouseEnter={() => setActiveModule(module.id)}
              onMouseLeave={() => setActiveModule(null)}
              isActive={activeModule === module.id}
              isReversed={index % 2 !== 0}
            >
              <div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>
              <div className="image-wrapper">
                <img src={`${module.id}.png`} alt={`IMagem ${module.id}`} />
              </div>
            </ModuleItem>
          ))}
        </ModuleList>
      </CourseContent>
    </CourseContainer>
  )
}

export { Modulos }
