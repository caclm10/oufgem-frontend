import { Box, Heading } from '@chakra-ui/react'
import MainContainer from '../../../atoms/MainContainer'

const CollectionHeader = ({ title = 'Products' }) => {
    return (
        <MainContainer mb={0}>
            <Box
                py={10}
                borderBottom="1px solid"
                borderBottomColor="gray.200"
            >
                <Heading
                    textTransform="uppercase"
                    letterSpacing="wider"
                    as="h1"
                    size="2xl"
                >
                    {title}
                </Heading>
            </Box>
        </MainContainer>
    )
}

export default CollectionHeader