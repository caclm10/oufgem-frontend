import { SimpleGrid } from '@chakra-ui/react'
import ProductItem from './ProductItem'

const ProductList = ({ products = [], pt = 5, pb = 32 }) => {
    return (
        <SimpleGrid columns={[1, null, 2, null, 4]} spacing={10} pt={pt} pb={pb}>
            {products.length > 0 && products.map(product => <ProductItem key={product.id} product={product} />)}
        </SimpleGrid>
    )
}

export default ProductList