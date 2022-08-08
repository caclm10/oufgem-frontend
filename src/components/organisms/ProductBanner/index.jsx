import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import productBrand1 from '../../../assets/images/product-brand-1.jpg'
import productBrand2 from '../../../assets/images/product-brand-2.jpg'
import productBrand3 from '../../../assets/images/product-brand-3.jpg'
import CustomButton from '../../atoms/CustomButton'
import MainContainer from '../../atoms/MainContainer'

const ProductBanner = () => {
    return (
        <MainContainer>
            <SimpleGrid columns={[1, null, 3]} spacingX="20px">
                <SimpleGrid columns={3} gridColumn="span 2 / span 2" rounded="xl" overflow="hidden">
                    <Box
                        as="img"
                        src={productBrand1}
                        alt="product brand"
                        w="full"
                        h="500px"
                        objectFit="cover"
                    />
                    <Box
                        as="img"
                        src={productBrand2}
                        alt="product brand"
                        w="full"
                        h="500px"
                        objectFit="cover"
                    />
                    <Box
                        as="img"
                        src={productBrand3}
                        alt="product brand"
                        w="full"
                        h="500px"
                        objectFit="cover"
                    />
                </SimpleGrid>

                <Flex justify="center" align="center">
                    <Box textAlign="center">
                        <Heading as="h3" size="2xl" mb={8} textTransform="uppercase">Your Only Outfit</Heading>

                        <Heading as="h4" size="md" fontWeight="normal" mb={20} textTransform="uppercase">Show Your Style</Heading>

                        <CustomButton
                            as={Link}
                            to="/collections"
                            ripple
                            w="full"
                            colorScheme="secondary"
                            size="lg"
                        >
                            Shop Now
                        </CustomButton>
                    </Box>
                </Flex>
            </SimpleGrid>
        </MainContainer>
    )
}

export default ProductBanner