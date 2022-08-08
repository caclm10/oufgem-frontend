import { useCallback, useEffect, useState } from "react"
import { getNewestProducts } from "../../../lib/api/products.api"
import MainContainer from "../../atoms/MainContainer"
import ProductList from "../../molecules/Products/ProductList"
import Header from "./Header"

const Newest = () => {
    const [products, setProducts] = useState([])

    const getProducts = useCallback(async () => {
        const products = await getNewestProducts()

        setProducts(products)
    }, [getNewestProducts])

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <MainContainer>
            <Header />

            <ProductList products={products} />
        </MainContainer>
    )
}

export default Newest