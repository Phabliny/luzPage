import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { listAllFilesEvents } from "../../service/storageUtils";


const ServicesContainer = styled.div`
  text-align: center;
  background-color: #f9f9f9;
  padding: 60px 0;
  display: flex;
  align-items: center; /* Align children vertically in the center */
  justify-content: center; /* Align children horizontally in the center */
  height: 100%; /* Ensure the container takes full height */
`;

const SectionTitle = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

const ServiceItem = styled.div`
  width: auto;
  margin: 30px auto 30px auto;
  width: 100%; /* Set the width to 100% to center the content */
`;

const CustomSlider = styled(Slider)`
  margin-bottom: 30px;
  .slick-dots {
    bottom: 20px; /* Adjust the position of the dots as needed */
    margin-top: 10px; /* Add margin to create distance from the image */
  }

  .slick-dots li button:before {
    font-size: 14px; /* Increase the font size of the dots as needed */
    color: #c47538; /* Change the color of the inactive dots */
    opacity: 1; /* Make the inactive dots fully visible */
  }

  .slick-dots li.slick-active button:before {
    color: #fff; /* Change the color of the active dot */
    opacity: 1; /* Make the active dot fully visible */
  }

  .slick-prev,
  .slick-next {
    font-size: 24px; /* Increase the font size of the arrows as needed */
    color: #c47538; /* Change the color of the arrows */
    opacity: 1; /* Make the arrows fully visible */
    z-index: 1;
  }

  .slick-prev:hover,
  .slick-next:hover {
    color: #fff; /* Change the color of the arrows on hover */
  }

  .slick-slide {
    display: flex;
    justify-content: center; /* Center the slide content horizontally */
  }

  .slick-center img {
    width: 500px; /* Customize the width of the centered image */
    height: 500px; /* Customize the height of the centered image */
  }
`;

export const Events = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const files = await listAllFilesEvents();
      console.log("arquivos: ++++++++++++++++++++++++++++++++++++ ", files);
      setEventsData(files);
    } catch (error) {
      console.error("Erro ao listar os arquivos:", error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ServicesContainer id="services">
      <div className="container">
        <SectionTitle>
          <Title>Próximos eventos</Title>
        </SectionTitle>
        <CustomSlider {...settings}>
          {eventsData.length > 0 ? (
            eventsData.map((fileName, index) => (
              <ServiceItem key={index}>
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/luzapp-858b0.appspot.com/o/events%2F${encodeURIComponent(
                    fileName
                  )}?alt=media`}
                  alt="imagem do evento"
                  width="500"
                  height="500"
                />
              </ServiceItem>
            ))
          ) : (
            <div>No events found.</div>
          )}
        </CustomSlider>
      </div>
    </ServicesContainer>
  );
};
