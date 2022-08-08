import { IconButton } from "@chakra-ui/react"
import { forwardRef } from "react"


const CustomIconButton = forwardRef(({
    children,
    size = 'md',
    colorScheme = 'brand',
    plain = false,
    icon = null,
    rounded = "full",
    ...rest
}, ref) => {
    return (
        <IconButton
            ref={ref}
            bgColor={plain ? 'transparent' : `${colorScheme}.default`}
            color={plain ? `${colorScheme}.default` : `${colorScheme}.contrast`}
            size={size}
            _hover={{
                bgColor: plain ? 'transparent' : `${colorScheme}.light`
            }}
            _active={{
                bgColor: plain ? 'transparent' : `${colorScheme}.dark`
            }}
            icon={icon}
            rounded={rounded}
            {...rest}
        />
    )
})

export default CustomIconButton