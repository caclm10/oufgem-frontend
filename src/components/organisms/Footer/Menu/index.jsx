import { Box, GridItem, Heading, VStack } from "@chakra-ui/react"

const Menu = ({ span = 1, title = '', children, menuSpacing = 3 }) => {
    return (
        <GridItem colSpan={span}>
            <Heading as="h6" size="md" fontSize="18px" mb={5}>{title}</Heading>

            <VStack spacing={menuSpacing} align="flex-start">
                {children}
            </VStack>
        </GridItem>
    )
}

export default Menu