import { useParams } from "react-router-dom"

const Products = () => {
    const { slug } = useParams()

    return (
        <div>Products</div>
    )
}

export default Products