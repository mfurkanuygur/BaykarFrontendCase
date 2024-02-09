import '../src/scss/main.scss';
import bgWaves from "./assets/images/bg-waves.png"

import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Footer from './components/Footer';
import { useEffect, useState } from "react";

import mainTriangle from './assets/images/main-triangle.png'
function App() {
  const [isWideScreen, setIsWideScreen] = useState(true);

  const handleResize = () => {
    const isWideScreen = window.innerWidth >= 992;
    setIsWideScreen(isWideScreen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className='position-relative z-1'>
        <Navbar />
        <Section1 />
        <Section2 />
        <div className='position-absolute bottom-0 z-n1 d-none d-lg-block'>
          <img className='vw-100' src={mainTriangle} alt="main-triangle" />
        </div>
      </div>
      <Section3 />
      <Section4 />
      {/*  Arka plana bakılabilir */}
      <Section5 />
      <div className='position-relative '>
        <Section6 />
        <div className='position-absolute bottom-0 z-n1 d-none d-lg-block'>
          <img className='vw-100' src={bgWaves} alt="bgWaves" />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App
