import { chakra } from "@chakra-ui/react";

export const Card = chakra('div', {
    baseStyle: {
        shadow: 'lg',
        bgColor: 'white',
        // border: '1px solid black'
    }
})

export const CardContent = chakra('div', {
    baseStyle: {
        p: 5
    }
})