import { chakra } from "@chakra-ui/react";

const ImageItem = chakra('img', {
    baseStyle: {
        position: 'absolute',
        inset: 0,
        w: 'full',
        h: 'full',
        objectFit: 'cover',
        objectPosition: 'center -250px'
    }
})

export default ImageItem