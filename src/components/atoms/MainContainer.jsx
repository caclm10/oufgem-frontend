import { Container } from '@chakra-ui/react'

const MainContainer = ({
    maxW = "full",
    mb = 8,
    children,
    py = 0,
    pt = 0,
    pb = 0,
    position = 'static',
    top = 'auto',
    bottom = 'auto',
    right = 'auto',
    left = 'auto',
    zIndex = 0,
    bgColor = 'transparent',
    opacity = 1,
    display = 'block',
    visibility = 'visible',
    transition = '',
    transform = '',
    _groupHover = {}
}) => {
    return (
        <Container
            maxW={maxW}
            mb={mb}
            py={py}
            pt={pt}
            pb={pb}
            position={position}
            top={top}
            left={left}
            display={display}
            bgColor={bgColor}
            zIndex={zIndex}
            opacity={opacity}
            transition={transition}
            visibility={visibility}
            transform={transform}
            _groupHover={_groupHover}
        >
            {children}
        </Container>
    )
}

export default MainContainer