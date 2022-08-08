import { Box, Heading, HStack, IconButton, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import { Card, CardContent } from "../../atoms/Card"
import RupiahFormat from "../../atoms/RupiahFormat";
import Image from "../../atoms/Image";
import { useRef } from "react";
import { useHoverDirty } from "react-use";
import { Link } from "react-router-dom";
import { BsHeart, BsBasketFill } from "react-icons/bs";
import CustomIconButton from "../../atoms/CustomIconButton";

const ProductItem = ({ product = null }) => {
    const { name, price, discount, images } = product
    const imageContainerRef = useRef(null)

    const isHoveringImage = useHoverDirty(imageContainerRef)
    return (
        <Card shadow="md">
            <LinkBox
                position="relative"
                h="400px"
                ref={imageContainerRef}
                shadow="lg"
                rounded="xl"
                overflow='hidden'
            >
                <Box
                    // bgColor="#1719230f"
                    h="full"
                >
                    <Image
                        src={images[0]}
                        alt="product"
                        w="full"
                        h="400px"
                        objectFit="contain"
                        position="absolute"
                        inset={0}
                        transition="opacity 0.2s linear"
                        opacity={isHoveringImage ? 0 : 1}
                    />
                    <Image
                        src={images[1]}
                        alt="product"
                        w="full"
                        h="400px"
                        objectFit="contain"
                        position="absolute"
                        inset={0}
                        transition="opacity 0.2s linear"
                        opacity={isHoveringImage ? 1 : 0}
                    />
                </Box>
                <LinkOverlay as={Link} to="/" />
            </LinkBox>
            <CardContent>
                <HStack ml={-2} mb={3}>
                    <CustomIconButton
                        colorScheme="secondary"
                        aria-label="wishlist"
                        size="sm"
                        icon={<BsHeart fontSize={20} />}
                        plain
                    />
                    <CustomIconButton
                        colorScheme="secondary"
                        aria-label="cart"
                        size="sm"
                        icon={<BsBasketFill fontSize={20} />}
                        plain
                    />
                </HStack>
                <Heading as="h6" size="small" mb={3}>
                    <Text
                        as={Link}
                        to="/"
                        borderBottom="2px solid transparent"
                        transition="border 0.2s, color 0.2s"
                        _hover={{
                            borderBottomColor: 'brand.default',
                            color: 'brand.default'
                        }}

                    >
                        {name}
                    </Text>
                </Heading>

                <HStack spacing={3}>
                    <Text color="gray.400" textDecoration="line-through">
                        <RupiahFormat value={price} />
                    </Text>
                    <Text fontWeight="bold">
                        <RupiahFormat value={price - (price * discount / 100)} />
                    </Text>
                </HStack>
            </CardContent>
        </Card >
    )
}

export default ProductItem