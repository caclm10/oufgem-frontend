import { CloseButton as CloseBtn } from '@chakra-ui/react'

const CloseButton = ({
    size = 'md',
    rounded = 'full'
}) => {
    return (
        <CloseBtn
            size={size}
            rounded={rounded}
            _hover={{
                bgColor: 'transparent'
            }}
            _active={{
                bgColor: 'transparent'
            }}
        />
    )
}

export default CloseButton