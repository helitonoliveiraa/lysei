import Link from 'next/link';
import { useRouter } from 'next/router';
import { Flex, Text, Button } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper/core';

SwiperCore.use([Pagination, Navigation, Mousewheel, Keyboard, Autoplay]);

type Post = {
  id: string;
  author_id: string;
  city: string;
  description: string;
  district: string;
  likes: number;
  latitude: number;
  longitude: number;
  number: number;
  solved: boolean;
  state: string;
  street: string;
  title: string;
};
type SlideProps = {
  imageURL: string[];
  post: Post;
};

export function CardSlide({ imageURL, post }: SlideProps): JSX.Element {
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
            <Button
              type="button"
              border="none"
              bgColor="transparent"
              _hover={{
                bgColor: 'transparent',
              }}
            >
              <Link href="/home/occurrence_view">
                <a>
                  <Text fontSize="sm" fontWeight="bold" color="gray.50">
                    Visualizar detalhes
                  </Text>
                </a>
              </Link>
            </Button>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
