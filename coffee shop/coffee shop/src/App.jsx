import './App.css'
import About from './Components/about'
import Carousel from './Components/carousel'
import Footer from './Components/Footer'
import Form from './Components/ContactForm'
import Galary from './Components/Galary'
import Header from './Components/header'
import MenuList from './Components/MenuList'
import Review from './Components/Reviews'

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <About />
      <MenuList />

      <Galary />
      <Review />
      <Form/>
      <Footer />
    </>
  )
}

export default App
