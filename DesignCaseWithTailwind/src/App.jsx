import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Section1CollectibleSneakers from './components/Section1CollectibleSneakers'
import Section2Viverra from './components/Section2Viverra'
import Section3BestoftheBest from './components/Section3BestoftheBest'
import Section4WhyJoinUs from './components/Section4WhyJoinUs'
import mainTriangle from "./assets/images/main-triangle.png"
import Section5Slider from './components/Section5Slider'
import bigYellow from "./assets/images/big-yellow.png"
import bgWaves from "./assets/images/bg-waves.png"
import Section6Grow from './components/Section6Grow'
import Section7Shoes from './components/Section7Shoes'

function App() {

  return (
    <main className='  mx-auto'>
      <div className="relative overflow-hidden bg-gradient-to-t from-[#fffbeb] via-white to-white max-md:bg-gradient-to-t max-md:from-white max-md:to-white">
        <Navbar />
        <Section1CollectibleSneakers />
        <Section2Viverra />
        <div className='absolute  bottom-0 right-0 max-md:hidden'>
          <img className='w-svw ml-5' src={mainTriangle} alt="main-triangle" />
        </div>
      </div>
      <Section3BestoftheBest />
      <div className='bg-gradient-to-t from-[#fffefc] via-[#fffdf8] to-[#fffcf2]'>
        <Section4WhyJoinUs />
        <Section5Slider />
        <div className='relative z-10 max-md:overflow-x-hidden'>
          <Section6Grow className="relative z-20" />
          <div className='absolute bottom-0 -z-30  '>
            <img className='md:w-svw md:h-svh max-md:max-w-fit   ' src={bgWaves} alt="" />
          </div>
        </div>
      </div>
      <Section7Shoes />
      <Footer />
    </main>
  )
}

export default App
