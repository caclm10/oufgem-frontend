import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Icon, IconButton, SimpleGrid, Text, Tooltip } from "@chakra-ui/react"
import { IoHeartOutline, IoCartOutline } from 'react-icons/io5'
import { BsBasketFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import logo from '../../../assets/svg/logo.svg'
import MainContainer from "../../atoms/MainContainer"
import CategoryMenuList from "./CategoryMenuList"
import CustomIconButton from "../../atoms/CustomIconButton"
import CustomButton from "../../atoms/CustomButton"
import Action from "./Action"

const Navbar = () => {
    return (
        <MainContainer mb={0} position="relative" zIndex={30}>
            <Flex
                justify="space-between"
                align="center"
                height="82px"
            >
                <Box>
                    <HStack as={Link} to="/" spacing={3}>
                        <img src={logo} alt="logo" width={50} height={50} />
                        <Heading fontFamily="Bedini Bold" as="h2" size="md">OufGem.</Heading>
                    </HStack>
                </Box>

                <CategoryMenuList />

                <Action />
            </Flex>
        </MainContainer>
    )
}

export default Navbar