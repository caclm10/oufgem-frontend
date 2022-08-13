import { Container } from '@chakra-ui/react'

const MainContainer = ({
    maxW = "full",
    mb = 8,
    children,
    _groupHover = {},
    ...rest
}) => {
    return (
        <Container
            maxW={maxW}
            mb={mb}
            _groupHover={_groupHover}
            {...rest}
        >
            {children}
        </Container>
    )
}

export default MainContainer