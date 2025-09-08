import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <div style={{marginTop:"89vh"}}>
        <About />
      </div>
      <Work />
      <Contact />
    </>
  )
}

export default App
