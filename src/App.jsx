import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Service from "./components/Service"
import Price from './components/Price'
import Time from './components/Time'
import Footer from "./components/Footer"

function App() {
  return (
    <div>

    <section id="hem" className="relative">
      <Navbar />
      <Hero />
    </section>

    <section id="service">
      <Service />
    </section>

    <section id="pris">
      <Price />
    </section>

    <section id="time" className="relative">
      <Time />
      <Footer />
    </section>

    </div>
  )
}

export default App
