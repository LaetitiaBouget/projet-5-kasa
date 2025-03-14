import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import PropertyDetails from '../pages/PropertyDetails'
import NotFound from '../pages/NotFound'
import routes from '../routes/routes'

const AppRouter = () => {
  return (
    <Routes>
        {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      </Routes>
  )
}

export default AppRouter