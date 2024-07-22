import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden; /* 이미지가 넘치지 않도록 설정 */
  position: relative; /* 절대 위치를 사용하기 위해 부모 요소를 상대 위치로 설정 */
  margin: auto;
`;

const SlideImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const SlideImage = styled.img`
  max-width: 950px;
  max-height: 300px;
  width: auto;
  height: auto;
  margin: auto;
`;

const CustomSlider = styled(Slider)`

  .slick-dots {
    bottom: 10px;
  }

  .slick-dots li {
    margin: 0;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #fff;
  }

  .slick-dots li.slick-active button:before {
    color: #fff;
  }

  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
    z-index: 1;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    color: #fff;
  }
`;

const carouselImages = [
    'https://lh6.googleusercontent.com/proxy/tX_vSqnx7EPDPTkspwuq8xAemv7LXat1ixTdhQ31uHileNYXJ1UogOzm5KK1wnZBc1eaCNHH0wjtbKH91onHmYJvDPAogLEjpa2VU7keJkKS',
    'https://old.bufs.ac.kr/Fileroom/Board/UPLOAD/10000748/2021/10/15/%EA%B3%A0%EC%9A%A9%EB%85%B8%EB%8F%99%EB%B6%80%EA%B5%AD%EB%AF%BC%EC%B7%A8%EC%97%85%EC%A7%80%EC%9B%90%EC%A0%9C%EB%8F%84%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT776dORdv7_rujj-mAV1q8oZotau_kdDTU0A&s',
    'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/06/10/d464555c-81c2-42d6-a068-ef1fc49bdabe.jpg'
];

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: true, // 이전 및 다음 버튼을 표시
    };

    return (
        <CarouselContainer>
            <CustomSlider {...settings}>
                {carouselImages.map((image, index) => (
                    <SlideImageContainer key={index}>
                        <SlideImage src={image} alt={`Slide ${index + 1}`} />
                    </SlideImageContainer>
                ))}
            </CustomSlider>
        </CarouselContainer>
    );
}

export default Carousel;
