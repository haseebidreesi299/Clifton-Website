import './App.css'
import Slider from './components/content/OurCollection'
import Navigationbar from './components/headers/Navigationbar'
import Products from './components/content/Products'
import CliftonCapsule from './components/content/CliftonCapsule'
import Favrioute from './components/content/Favrioute'
import MainImage from './components/content/MainImage'
import MainhoverImg from './components/content/MainhoverImg'
import ReviewSlider from './components/content/ReviewSlider'
import InstagramSection from './components/content/InstaImages'
import Footer from './components/footer/Footer'

function App() {
 

  return (
    <>
     <Navigationbar />
     <Slider />
     <Products />
     <CliftonCapsule />
     <Favrioute />
     <MainImage />
     <MainhoverImg />
     <ReviewSlider />
     <InstagramSection />
     <Footer />
    </>
  )
}

export default App
