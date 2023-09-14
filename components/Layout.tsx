import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({children}: any) => {
    return (
        <>
            <Navbar />
            <main className="">
                {children}
            </main>

            <Footer />
        </>
    )
}

export default Layout