import { chakra } from "@chakra-ui/react";

const Image = chakra('img', {
    baseStyle: {
        objectFit: 'cover'
    }
})

export default Image