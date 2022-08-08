import { Grid, SimpleGrid } from '@chakra-ui/react'
import MainContainer from "../../atoms/MainContainer"
import tShirt from '../../../assets/images/t-shirt.jpg'
import outer from '../../../assets/images/outer.jpg'
import shirt from '../../../assets/images/shirt.jpg'
import pants from '../../../assets/images/pants.jpg'
import CategoryItem from './CategoryItem'

const ProductCategories = () => {
    return (
        <MainContainer mb={12}>
            <Grid templateColumns="repeat(2, 1fr)" rounded="xl" overflow="hidden">
                <CategoryItem
                    to="/"
                    title="T-Shirt"
                    imgSrc={tShirt}
                    position="center -300px"
                />
                <CategoryItem
                    to="/"
                    title="Outer"
                    imgSrc={outer}
                    position="center -270px"
                />
                <CategoryItem
                    to="/"
                    title="Shirt"
                    imgSrc={shirt}
                    position="center -265px"
                />
                <CategoryItem
                    to="/"
                    title="Pants"
                    imgSrc={pants}
                />
            </Grid>
        </MainContainer>
    )
}

export default ProductCategories