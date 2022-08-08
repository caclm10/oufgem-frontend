import { Box, GridItem, Heading, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import LinkWithUnderline from "../../atoms/LinkWithUnderline"
import CategoryMenuItem from "./CategoryMenuItem"

const CategorySubMenuList = ({
    title = '',
    slug = '',
    types = []
}) => {
    return (
        <Box>
            <Heading as="h5" size="sm" fontSize="15px" mb={5}>
                <Text
                    as={Link}
                    to="/"
                    _hover={{
                        color: 'brand.default'
                    }}
                >
                    {title}
                </Text>
            </Heading>

            <VStack align="flex-start" spacing={3}>
                {types.length > 0 && types.map(type =>
                    <LinkWithUnderline
                        key={type.id}
                        title={type.name}
                        color="black"
                        hoverColor="brand.default"
                        underlineColor="brand.default"
                    />
                )}
            </VStack>
        </Box>
    )
}

export default CategorySubMenuList