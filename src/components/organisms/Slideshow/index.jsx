import { Autoplay, EffectFade, Navigation, A11y } from 'swiper';
import { Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import MainContainer from '../../atoms/MainContainer'
import SlideshowItem from './SlideshowItem';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const Slideshow = ({ images = [] }) => {
    return (
        <MainContainer>
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, A11y]}
                navigation
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                {images.length > 0 && images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <SlideshowItem image={image} />

                    </SwiperSlide>
                ))}
            </Swiper>

        </MainContainer>
    )
}

export default Slideshow