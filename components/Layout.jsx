import Meta from "./Meta"
import Footer from "./Footer"
import Navbar from "./Navbar/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Navbar />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
