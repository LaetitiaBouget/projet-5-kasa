import { Routes, Route } from 'react-router-dom'
import routes from '../routes/routes'
import Banner from './Banner'

const AppRouter = () => {
  return (
    <Routes>
        {routes.map((route, index) => (
        <Route 
          key={index} 
          path={route.path} 
          element={
            <>
            {route.banner && <Banner image={route.banner.image} text={route.banner.text} />} 
            {route.element} 
            </>
          }
        />
      ))}
      </Routes>
  )
}

export default AppRouter