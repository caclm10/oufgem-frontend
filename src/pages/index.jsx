import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Collections from "./Collections"
import Home from "./Home"
import Products from "./Products"
import Product from "./Products/Product"

const Pages = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <Routes>

            <Route path="/">

                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />

                    <Route path="collections">
                        <Route index element={<Collections />} />

                        <Route path=":slug" element={<Collections />} />
                    </Route>

                    <Route path="products">
                        <Route path=":slug" element={<Product />} />
                    </Route>
                </Route>


            </Route>


        </Routes>
    )
}

export default Pages