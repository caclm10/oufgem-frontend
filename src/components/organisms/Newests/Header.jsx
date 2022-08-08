import { Button, Flex, Heading } from "@chakra-ui/react"
import { HiChevronDoubleRight } from 'react-icons/hi'
import CustomButton from "../../atoms/CustomButton"

const Header = () => {
    return (
        <Flex
            justify="space-between"
            align="center"
            pb={4}
            borderBottom="1px solid black"
            mb={7}
        >
            <Heading as="h5" size="lg" fontWeight="medium">Newest Products</Heading>

            <CustomButton
                size="sm"
                colorScheme="secondary"
                plain
                rightIcon={<HiChevronDoubleRight />}
            >
                See More
            </CustomButton>
        </Flex>
    )
}

export default Header