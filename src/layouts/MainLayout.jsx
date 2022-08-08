import { Outlet } from "react-router-dom"
import Footer from "../components/organisms/Footer"
import Navbar from "../components/organisms/Navbar"

const MainLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    )
}

export default MainLayout