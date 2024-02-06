import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Section1CollectibleSneakers from './components/Section1CollectibleSneakers'
import Section2Viverra from './components/Section2Viverra'
import Section3BestoftheBest from './components/Section3BestoftheBest'
import Section4WhyJoinUs from './components/Section4WhyJoinUs'
import mainTriangle from "./assets/images/main-triangle.png"
import Section5Slider from './components/Section5Slider'

function App() {

  return (
    <main className='container-xl mx-auto'>
      <div className="relative overflow-hidden bg-gradient-to-t from-[#fffbeb] via-white to-white max-md:bg-gradient-to-t max-md:from-white max-md:to-white">
        <Navbar />
        <Section1CollectibleSneakers />
        <Section2Viverra />
        <div className='absolute  bottom-0 right-0 max-md:hidden'>
          <img className='w-svw ml-5' src={mainTriangle} alt="main-triangle" />
        </div>
      </div>
      <Section3BestoftheBest />
      <Section4WhyJoinUs />
      <Section5Slider />
      <Footer />
    </main>
  )
}

export default App
