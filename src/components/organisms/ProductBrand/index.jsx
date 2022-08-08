import { Box, Container } from '@chakra-ui/react'
import MainContainer from '../../atoms/MainContainer'
import productBrand from '../../../assets/images/product-brand.jpg'

const ProductBrand = () => {
    return (
        <MainContainer>
            <Box
                as="img"
                src={productBrand}
                alt="product brand"
                w="full"
                h="300px"
                objectFit="cover"
            />
        </MainContainer>
    )
}

export default ProductBrand