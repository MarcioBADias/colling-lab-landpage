import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Caracteristicas } from './Components/Caracteristicas'
import Testimonials from './Components/Testimonials'
import { Pricing } from './Components/Pricing'
import { Footer } from './Components/Footer'
import { Destaque } from './Components/Destaque'
import { Form } from './Components/Form'
import { Modulos } from './Components/Modulos'

const App = () => {
  return (
    <Router>
      <Header />
      <Destaque />
      <Form />
      <Caracteristicas />
      <Modulos />
      <Footer />
    </Router>
  )
}

export { App }
