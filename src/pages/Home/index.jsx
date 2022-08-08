import Newest from "../../components/organisms/Newests"
import ProductBanner from "../../components/organisms/ProductBanner"
import ProductCategories from "../../components/organisms/ProductCategories"
import Slideshow from "../../components/organisms/Slideshow"

import f1 from '../../assets/images/f-1.jpg'
import f2 from '../../assets/images/f-2.jpg'
import f3 from '../../assets/images/f-3.jpg'
import m1 from '../../assets/images/m-1.jpg'
import m2 from '../../assets/images/m-2.jpg'
import m3 from '../../assets/images/m-3.jpg'

const images = {
    female: [
        { src: f1, position: 'center -80px' },
        { src: f2, position: 'center -30px' },
        { src: f3, position: 'center -100px' }
    ],
    male: [
        { src: m1, position: 'center -710px' },
        { src: m2, position: 'center center' },
        { src: m3, position: 'center -1000px' },
    ]
}

const Home = () => {
    return (
        <>
            <Slideshow images={images.female} />
            <Slideshow images={images.male} />

            <ProductBanner />

            <ProductCategories />

            <Newest />
        </>
    )
}

export default Home