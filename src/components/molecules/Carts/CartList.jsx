import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { calculateTotalPrice } from "../../../lib/functions"
import CustomButton from "../../atoms/CustomButton"
import RupiahFormat from "../../atoms/RupiahFormat"
import CartItem from "./CartItem"

const CartList = ({ items = [] }) => {
    return (
        <VStack alignItems="stretch">
            {items.length > 0 && items.map(item => <CartItem key={item.id} item={item} />)}

            <Box py={5}>
                <Flex justify="space-between" mb={8}>
                    <Text fontWeight="medium">Total Price</Text>
                    <Text fontWeight="bold">
                        <RupiahFormat value={calculateTotalPrice(items)} />
                    </Text>
                </Flex>

                <Flex justify="flex-end">
                    <CustomButton colorScheme="secondary" size="lg">
                        Checkout
                    </CustomButton>
                </Flex>
            </Box>
        </VStack>
    )
}

export default CartList