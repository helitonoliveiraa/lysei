import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper/core';

SwiperCore.use([Pagination, Navigation, Mousewheel, Keyboard, Autoplay]);

type SlideProps = {
  imageURL: string[];
};

export function CardSlide({ imageURL }: SlideProps): JSX.Element {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
    >
      {imageURL.map(image => (
        <SwiperSlide key={image}>
          <Flex
            borderRadius={8}
            textAlign="center"
            bgImage={image}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            w="100%"
            h={200}
            align="center"
            justify="center"
            direction="column"
          >
            <Link href="/home/occurrence_view">
              <a>
                <Text fontSize="sm" fontWeight="bold" color="gray.50">
                  Visualizar detalhes
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
