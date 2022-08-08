import { Box, GridItem, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { toSlug } from '../../../lib/string'

const CategoryItem = ({ to = "", title = "", imgSrc = "", position = "center" }) => {
    return (
        <GridItem p={3} bgColor="gray.900">
            <LinkBox
                position="relative"
                height="300px"
                width="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                rounded="xl"
                data-group
            >
                <Box
                    as="img"
                    src={imgSrc}
                    alt={toSlug(title)}
                    height="full"
                    width="full"
                    objectFit="cover"
                    inset={0}
                    position="absolute"
                    objectPosition={position}
                    transition="transform 0.3s linear, filter 0.3s linear"
                    filter="grayscale(100%)"
                    _groupHover={{
                        transform: 'scale(1.1)',
                        filter: "grayscale(0)"
                    }}
                />
                <Box
                    position="absolute"
                    bgColor="black"
                    opacity={0.1}
                    inset={0}
                    transition="opacity 0.3s linear"
                    _groupHover={{
                        opacity: 0.3
                    }}
                />
                <Text
                    position="relative"
                    color="gray.300"
                    fontWeight="bold"
                    textTransform="uppercase"
                    transition="color 0.3s linear"
                    _groupHover={{
                        color: 'white'
                    }}
                >
                    {title}
                </Text>

                <LinkOverlay as={Link} to={to}></LinkOverlay>
            </LinkBox>
        </GridItem>
    )
}

export default CategoryItem