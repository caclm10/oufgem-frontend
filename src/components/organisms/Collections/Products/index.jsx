import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react"
import MainContainer from "../../../atoms/MainContainer"
import ProductList from "../../../molecules/Products/ProductList"

const CollectionProducts = ({ products = [] }) => {

    return (
        <MainContainer>
            <Flex justify="flex-end" py={10}>
                <FormControl maxW='200px'>
                    <FormLabel>Sort By</FormLabel>
                    <Select defaultValue="date,desc">
                        <option>Alhpabetically, A-Z</option>
                        <option>Alhpabetically, Z-A</option>
                        <option value="date,desc">Date, new to old</option>
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