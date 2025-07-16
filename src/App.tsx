import { Fragment } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WhyLearnWMe from './components/WhyLearnWMe';
import Footer from './components/Footer';
import ContactFaqTabs from './components/ContactFaqTabs';
import Navbar from './components/Navbar';
import Reviews from './components/ReviewsTabs';
import Modalities from './components/Modalities';
import ButchFeats from './components/ButchFeats';
import './App.css'

function App() {

  return (
    <Fragment>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 left-0 h-full w-full bg-white" />
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,rgba(255,200,150,0.2),transparent)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_50%_50%_at_30%_80%,rgba(150,200,255,0.1),transparent)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.03) 75%, transparent 75%, transparent)] bg-size-[30px_30px]" />
      </div>


      {/* <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 md:px-8 overflow-x-clip"> */}
      <Navbar />
      <Hero />
      <About />
      <WhyLearnWMe />
      <Reviews />
      <ButchFeats />
      <Modalities />
      <ContactFaqTabs />
      <Footer />
      {/*  </div> */}

    </Fragment>
  )
}

export default App
