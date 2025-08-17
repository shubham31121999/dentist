
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import MeetOurTeam from './components/MeetOurTeam'
import OurServices from './components/OurServices'
import PatientInfoAndSpecials from './components/PatientInfoAndSpecials'
import ImageCarousel from './components/ImageCarousel'
import Faq from './components/Faq'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <Navbar/>
      <Hero />
      <AboutUs/>
      <MeetOurTeam />
      <OurServices />
      <PatientInfoAndSpecials />
      <ImageCarousel/>
      <Faq/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
