import { Box, Link } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import { useMeasure } from "react-use"

const LinkWithUnderline = ({
    to = "/",
    fontSize = "15px",
    color = "black",
    hoverColor = "black",
    underlineColor = "black",
    title = ''
}) => {
    const [ref, { width }] = useMeasure()

    return (
        <Link
            ref={ref}
            as={RouterLink}
            to={to}
            fontSize={fontSize}
            color={color}
            _hover={{
                textDecor: 'none',
                color: hoverColor
            }}
            data-group="link"
        >
            {title}
            <Box
                height="2px"
                bgColor={underlineColor}
                width={0}
                transition="width 0.1s linear"
                sx={{
                    '[data-group="link"]:hover &': {
                        width
                    }
                }}
            />
        </Link>
    )
}

export default LinkWithUnderline