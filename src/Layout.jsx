import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


const Layout = ({children}) => {

    return (
        <>
        <NavBar />
        <main className="layout">{children}</main>
        <Footer />
        </>
    )
}

export default Layout