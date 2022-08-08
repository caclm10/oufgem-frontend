import { HStack, Icon, Tooltip } from "@chakra-ui/react"
import { BsHeart } from 'react-icons/bs'
import CustomButton from "../../atoms/CustomButton"
import CustomIconButton from "../../atoms/CustomIconButton"
import ActionCart from "./ActionCart"

const Action = () => {
    return (
        <HStack align="center">
            <CustomButton size="sm" colorScheme="secondary" mr={3}>
                Sign In
            </CustomButton>
            <Tooltip label="My Wish List">
                <CustomIconButton
                    colorScheme="secondary"
                    aria-label="wishlist"
                    icon={<Icon as={BsHeart} boxSize={5} />}
                    size="sm"
                    plain
                />
            </Tooltip>

            <ActionCart />
        </HStack>
    )
}

export default Action