import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const CategoryMenuItem = ({ type = null }) => {
    const { name, slug } = type
    return (
        <Text as={Link} to="/" data-group>
            {name}
            <Box
                h="2px"
            />
        </Text>
    )
}

export default CategoryMenuItem