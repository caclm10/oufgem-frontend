import { Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Collections from "./Collections"
import Home from "./Home"

const Pages = () => {
    return (
        <Routes>

            <Route path="/">

                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />

                    <Route path="collections">
                        <Route index element={<Collections />} />
                    </Route>
                </Route>


            </Route>


        </Routes>
    )
}

export default Pages