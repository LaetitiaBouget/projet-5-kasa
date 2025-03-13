import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PropertyDetails from './pages/PropertyDetails'
import NotFound from './NotFound'
import NavBar from './NavBar'
import Banner from './Banner'
import Footer from './Footer'
import PropertyCard from './PropertyCard'



const AppRouter = () => {
    <Router>
        <NavBar />
        <Banner />
        <Footer />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
}
