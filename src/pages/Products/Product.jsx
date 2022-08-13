import { HStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ProductAction from '../../components/organisms/ProductAction'
import ProductDetail from '../../components/organisms/ProductDetail'

const Product = ({ }) => {
    const { slug } = useParams()

    return (
        <>
            <ProductAction />

            <ProductDetail />
        </>
    )
}

export default Product