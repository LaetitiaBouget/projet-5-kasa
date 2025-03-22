import Home from '../pages/Home'
import About from '../pages/About'
import AccommodationDetails from '../pages/AccommodationDetails'
import NotFound from '../pages/NotFound'

import homeBanner from '../assets/images/homeBanner.png'
import aboutBanner from '../assets/images/aboutBanner.png'


const routes = [
  { path: '/', element: <Home />, banner: { image: homeBanner, text: 'Chez vous, partout et ailleurs'} },
  { path: '/about', element: <About />, banner: { image: aboutBanner} },
  { path: '/accommodation/:id', element: <AccommodationDetails /> },
  { path: '*', element: <NotFound /> },
]

export default routes