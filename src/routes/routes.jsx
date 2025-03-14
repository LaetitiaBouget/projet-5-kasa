import Home from '../pages/Home'
import About from '../pages/About'
import PropertyDetails from '../pages/PropertyDetails'
import NotFound from '../pages/NotFound'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/property-details', element: <PropertyDetails /> },
  { path: '*', element: <NotFound /> },
]

export default routes