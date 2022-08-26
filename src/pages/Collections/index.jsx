import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CollectionHeader from "../../components/organisms/Collections/Header"
import CollectionProducts from "../../components/organisms/Collections/Products"
import { getCollections } from "../../lib/api/collections.api"

const Collections = () => {
    const { slug } = useParams()

    const [collections, setCollections] = useState({})

    const fetchCollections = useCallback(async () => {
        const collections = await getCollections(slug)

        setCollections(collections)
    }, [getCollections, slug])

    useEffect(() => {
        fetchCollections()
    }, [fetchCollections])

    return (
        <>
            <CollectionHeader title={collections?.name || 'Products'} />

            <CollectionProducts products={collections?.products} />
        </>
    )
}

export default Collections