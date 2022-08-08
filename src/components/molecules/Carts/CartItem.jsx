import {
    Box,
    Heading,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    SimpleGrid,
    Text,
    Flex,
    HStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { useUpdateEffect } from 'react-use'

import Image from "../../atoms/Image"
import RupiahFormat from "../../atoms/RupiahFormat"
import CloseButton from "../../atoms/CloseButton"
import useCartStore from "../../../stores/cart.store"

const CartItem = ({ item = null }) => {
    const [quantity, setQuantity] = useState(item.quantity)
    const setItemQuantity = useCartStore(state => state.setQuantity)

    useUpdateEffect(() => {
        setItemQuantity(item.id, +quantity)
    }, [quantity])

    return (
        <SimpleGrid columns={3} py={5} w="full" spacing={5} borderBottom="1px solid" borderBottomColor="gray.200">
            <Image
                src={item.product.images[0]}
                alt="f-2"
                h="158px"
                w="full"
            />
            <Box gridColumn="span 2 / span 2">
                <Heading as="h5" size="sm" mb={3}>{item.product.name}</Heading>
                <Text color="gray.600" mb={5}>Size: {item.size}</Text>

                <HStack mb={1} spacing={3}>
                    <Text color="#bfbfbf" textDecor="line-through" textDecorationThickness="2px" textDecorationColor="gray.500">
                        <RupiahFormat value={item.product.price} />
                    </Text>
                    <Text fontWeight="bold">
                        <RupiahFormat value={item.product.price - (item.product.price * item.product.discount / 100)} />
                    </Text>
                </HStack>

                <Flex justify="flex-end" mb={5}>
                    <CloseButton />
                </Flex>

                <NumberInput value={quantity} onChange={value => setQuantity(value)} maxW="120px">
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Box>
        </SimpleGrid>
    )
}

export default CartItem