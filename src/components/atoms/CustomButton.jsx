import clsx from 'clsx'
import { Box, Button } from "@chakra-ui/react"
import { forwardRef } from "react"

const CustomButton = forwardRef(({
    children,
    size = 'md',
    colorScheme = 'brand',
    plain = false,
    position = 'relative',
    overflow = 'hidden',
    ripple = false,
    onClick = (event) => { },
    ...rest
}, ref) => {
    const handleClick = event => {
        onClick(event)
    }

    return (
        <Button
            ref={ref}
            position={position}
            // overflow={overflow}
            className={clsx({
                ripple
            })}
            bgColor={plain ? 'transparent' : `${colorScheme}.default`}
            color={plain ? `${colorScheme}.default` : `${colorScheme}.contrast`}
            size={size}
            _hover={{
                bgColor: plain ? 'transparent' : `${colorScheme}.light`
            }}
            _active={{
                bgColor: plain ? 'transparent' : `${colorScheme}.dark`
            }}
            onClick={handleClick}
            {...rest}
        >
            <Box as="span" pointerEvents="none">
                {children}
            </Box>
        </Button>
    )
})

export default CustomButton