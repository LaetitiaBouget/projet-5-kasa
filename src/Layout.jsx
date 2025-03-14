import { useLocation, useMatch } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import PropertyCard from "./components/PropertyCard"
import routes from "./routes/routes"

const Layout = ({children}) => {
    const location = useLocation()
    
    const isNotFoundPage = !routes.some(route => route.path === location.pathname)

    const isHomePage = useMatch("/")

    return (
        <>
        <NavBar />
        {!isNotFoundPage && <Banner />}
        {isHomePage && <PropertyCard />}
        <main>{children}</main>
        <Footer />
        </>
    )
}

export default Layout