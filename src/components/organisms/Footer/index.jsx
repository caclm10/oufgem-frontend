import { Box, Grid, Heading, HStack, IconButton, SimpleGrid } from "@chakra-ui/react"
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import MainContainer from "../../atoms/MainContainer"
import Menu from "./Menu"
import MenuItem from './Menu/MenuItem'

const Footer = () => {
    return (
        <Box bgColor="black" color="white">
            <MainContainer mb={0} pt={10} pb={20}>
                <Grid
                    templateColumns={{
                        lg: 'repeat(5, 1fr)',
                        base: 'repeat(3, 1fr)',
                    }}
                    spacing={5}
                >
                    <Menu title="Customer Service">
                        <MenuItem title="Contact" />
                    </Menu>
                    <Menu title="Help">
                        <MenuItem title="Payment Information" />
                        <MenuItem title="Track your order" />
                        <MenuItem title="FAQs" />
                    </Menu>
                    <Menu title="Business">
                        <MenuItem title="About Us" />
                        <MenuItem title="Career" />
                        <MenuItem title="News" />
                    </Menu>
                    <Menu title="Follow Us" span={{ base: 3, lg: 2 }} menuSpacing={5}>
                        <HStack spacing={3}>
                            <IconButton
                                colorScheme="facebook"
                                rounded="full"
                                icon={<FaFacebook />}
                            />
                            <IconButton
                                colorScheme="pink"
                                rounded="full"
                                icon={<FaInstagram />}
                            />
                            <IconButton
                                colorScheme="red"
                                rounded="full"
                                icon={<FaYoutube />}
                            />
                            <IconButton
                                color="black"
                                bgColor="white"
                                rounded="full"
                                icon={<FaTiktok />}
                            />
                        </HStack>
                    </Menu>
                </Grid>
            </MainContainer>
        </Box>
    )
}

export default Footer