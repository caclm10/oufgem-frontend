import { Box } from "@chakra-ui/react"
import ImageItem from "./ImageItem"

// <a href='https://www.freepik.com/photos/man-style'>Man style photo created by fxquadro - www.freepik.com</a>
// Photo by <a href="https://unsplash.com/@nixcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tyler Nix</a> on <a href="https://unsplash.com/s/photos/men-style?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// <a href='https://www.freepik.com/photos/luxury-woman'>Luxury woman photo created by lookstudio - www.freepik.com</a>

const SlideshowItem = ({ image = null }) => {
    return (
        <Box
            width="full"
            pt="33.33333%"
            position="relative"
            rounded="xl"
            overflow="hidden"
        >
            <Box
                position="absolute"
                inset={0}
                w="full"
                h="full"
            >
                <ImageItem
                    src={image.src}
                    alt="slideshow"
                    objectPosition={image.position}
                />
            </Box>
        </Box>
    )
}

export default SlideshowItem