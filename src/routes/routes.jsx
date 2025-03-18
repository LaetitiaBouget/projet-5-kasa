import Home from '../pages/Home'
import About from '../pages/About'
import AccommodationsDetails from '../pages/AccommodationsDetails'
import NotFound from '../pages/NotFound'

import homeBanner from '../assets/images/homeBanner.png'
import aboutBanner from '../assets/images/aboutBanner.png'



const routes = [
  { path: '/', element: <Home />, banner: { image: homeBanner, text: 'Chez vous, partout et ailleurs'} },
  { path: '/about', element: <About />, banner: { image: aboutBanner} },
  { path: '/property-details', element: <AccommodationsDetails /> },
  { path: '*', element: <NotFound /> },
]

export default routes