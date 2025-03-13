import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PropertyDetails from './pages/PropertyDetails'
import PropertyCard from './PropertyCard'

const AppRouter = () => {
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
}
