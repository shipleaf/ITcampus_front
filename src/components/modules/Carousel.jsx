import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  width: 1000px;
  height: 330px;
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
  background-color: #000;
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
    'https://img.hankyung.com/photo/202403/01.36047379.1.jpg',
    'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202403/09/21e88381-7867-410a-b0c3-5d6c9cd430b1.jpg',
    'https://ilyo.co.kr/contents/article/images/2022/1013/1665663228269667.jpg',
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
