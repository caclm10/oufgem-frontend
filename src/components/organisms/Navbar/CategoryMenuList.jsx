import { Box, Button, Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from "react"
import { getCategories } from "../../../lib/api/categories.api"
import MainContainer from "../../atoms/MainContainer"
import CategorySubMenuList from "./CategorySubMenuList"


const CategoryList = () => {
    const [categories, setCategories] = useState([])

    const getCategoriesTypes = useCallback(async () => {
        const categories = await getCategories(true)

        setCategories(categories)
    }, [getCategories])

    useEffect(() => {
        getCategoriesTypes()
    }, [getCategoriesTypes])

    return (
        <Box
            height="full"
            display="flex"
            alignItems="center"
            data-group
        >
            <Button size="sm" variant="ghost">Products</Button>

            <MainContainer
                position="absolute"
                top="82px"
                left={0}
                bgColor="white"
                zIndex={30}
                opacity={0}
                visibility="hidden"
                transform="translateY(20px)"
                transition="opacity 0.3s linear, transform 0.3s linear"
                _groupHover={{
                    opacity: 1,
                    visibility: 'visible',
                    transform: "translateY(0)"
                }}
            >
                <Container maxW="container.md" pt={10} pb={16}>
                    <SimpleGrid columns={4} spacing={10} >

                        {categories.length > 0 && categories.map(category =>
                            <CategorySubMenuList
                                key={category.id}
                                title={category.name}
                                slug={category.slug}
                                types={category.types}
                            />
                        )}
                    </SimpleGrid>
                </Container>
            </MainContainer>
        </Box>
    )
}

export default CategoryList