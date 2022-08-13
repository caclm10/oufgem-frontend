import { Box, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import MainContainer from "../../atoms/MainContainer"
import p1 from '../../../assets/images/product-1.1.png'
import p2 from '../../../assets/images/product-1.2.png'
import Image from '../../atoms/Image'

const ProductAction = () => {
    return (
        <MainContainer>
            <SimpleGrid columns={2} py={10}>
                <HStack>
                    <Box>
                        <Image src={p1} alt="product 1" maxW="400px" mx="auto" />
                    </Box>
                    <VStack>

                    </VStack>
                </HStack>
                <div>ProductAction</div>
            </SimpleGrid>
        </MainContainer>
    )
}

export default ProductAction