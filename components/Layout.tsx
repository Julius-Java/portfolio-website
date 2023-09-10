import Navbar from "./Navbar"

const Layout = ({children}: any) => {
    return (
        <>
            <Navbar />
            <main className="">
                {children}
            </main>
        </>
    )
}

export default Layout