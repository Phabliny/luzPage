import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "../image";
import { GalleryWrapper, Title, Description } from "./styles";

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-arrow custom-next" onClick={onClick}>
    Next
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-arrow custom-prev" onClick={onClick}>
    Prev
  </button>
);

export const Gallery = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <GalleryWrapper id="gallery">
      <div className="container">
        <div className="section-title">
          <Title>Galeria de Produtos</Title>
          <Description>Explore a elegância atemporal e a qualidade excepcional dos nossos artesanatos de couro.</Description>
        </div>
        {props.data ? (
          <Slider {...settings}>
            {props.data.map((d, i) => (
              <div key={`${d.title}-${i}`}>
                <Image
                  title={d.title}
                  largeImage={d.largeImage}
                  smallImage={d.smallImage}
                />
              </div>
            ))}
          </Slider>
        ) : (
          "Loading..."
        )}
      </div>
    </GalleryWrapper>
  );
};
