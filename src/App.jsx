import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NotFound from './NotFound'
import NavBar from './NavBar'
import Banner from './Banner'
import Footer from './Footer'
import PropertyCard from './PropertyCard'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Banner />
      <AppRouter />
      <PropertyCard />
      <Footer />
    </Router>
  )
}

export default App

