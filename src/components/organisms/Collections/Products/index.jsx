import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from "react"
import { getProducts } from "../../../../lib/api/products.api"
import MainContainer from "../../../atoms/MainContainer"
import ProductList from "../../../molecules/Products/ProductList"

const CollectionProducts = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = useCallback(async () => {
        const products = await getProducts()

        setProducts(products)
    }, [getProducts])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return (
        <MainContainer>
            <Flex justify="flex-end" py={10}>
                <FormControl maxW='200px'>
                    <FormLabel>Sort By</FormLabel>
                    <Select>
                        <option>Alhpabetically, A-Z</option>
                        <option>Alhpabetically, Z-A</option>
                        <option selected>Date, new to old</option>
                        <option>Date, old to new</option>
                        <option>Price, low to high</option>
                        <option>Price, high to low</option>
                    </Select>
                </FormControl>
            </Flex>

            <ProductList products={products} />
        </MainContainer>
    )
}

export default CollectionProducts