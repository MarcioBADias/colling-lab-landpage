import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Caracteristicas } from './Components/Caracteristicas'
import Testimonials from './Components/Testimonials'
import { Pricing } from './Components/Pricing'
import { Footer } from './Components/Footer'
import { Destaque } from './Components/Destaque'
import { Form } from './Components/Form'
import { Modulos } from './Components/Modulos'
import { WhatsAppButton } from './Components/WhatsappButton'
import { useRef } from 'react'
import { useOnScreen } from './hooks/useOnScream'

const App = () => {
  const destaqueRef = useRef()
  const isDestaqueVisible = useOnScreen(destaqueRef)
  return (
    <Router>
      <Header isDestaqueVisible={isDestaqueVisible} />
      <Destaque ref={destaqueRef} />
      <Form />
      <Caracteristicas />
      <Modulos />
      <Footer />
      <WhatsAppButton />
    </Router>
  )
}

export { App }
