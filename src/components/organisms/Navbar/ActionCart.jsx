import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Icon,
    Tooltip,
} from "@chakra-ui/react"
import { useCallback, useEffect, useRef } from "react"
import { BsBasketFill } from 'react-icons/bs'
import { useToggle } from 'react-use'
import { getCart } from "../../../lib/api/carts.api"
import CustomButton from "../../atoms/CustomButton"
import useCartStore from '../../../stores/cart.store.js'
import CartList from "../../molecules/Carts/CartList"
import { countCartItem } from "../../../lib/functions"

const ActionCart = () => {
    const items = useCartStore(state => state.items)
    const fetchCart = useCartStore(state => state.fetchCart)
    const [isOpen, toggleOpen] = useToggle(false)
    const btnRef = useRef()

    useEffect(() => {
        fetchCart()
    }, [fetchCart])

    return (
        <>
            <Tooltip label="My Cart">
                <CustomButton
                    ref={btnRef}
                    aria-label="cart"
                    leftIcon={<Icon as={BsBasketFill} boxSize={5} />}
                    size="sm"
                    fontSize={16}
                    colorScheme="secondary"
                    plain
                    onClick={() => toggleOpen(true)}
                >
                    {countCartItem(items)}
                </CustomButton>
            </Tooltip>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={() => toggleOpen(false)}
                finalFocusRef={btnRef}
                size="sm"
            >
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Cart</DrawerHeader>

                    <DrawerBody>
                        <CartList items={items} />
                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default ActionCart