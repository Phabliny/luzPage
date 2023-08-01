import styled from "styled-components";
import Slider from "react-slick/dist/react-slick"; // Import Slider from react-slick

export const ServicesContainer = styled.div`
  text-align: center;
  background-color: #f9f9f9;
  padding: 60px 0;
  display: flex;
  align-items: center; /* Align children vertically in the center */
  justify-content: center; /* Align children horizontally in the center */
  height: 100%; /* Ensure the container takes full height */
`;

export const SectionTitle = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const ServiceItem = styled.div`
  width: auto;
  margin: 30px auto 30px auto;
  width: 100%; /* Set the width to 100% to center the content */
`;

export const CustomSlider = styled(Slider)`
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

  .slick-slide {
    display: flex;
    justify-content: center; /* Center the slide content horizontally */
  }

  .slick-center img {
    width: 500px; /* Customize the width of the centered image */
    height: 500px; /* Customize the height of the centered image */
  }

  .slick-prev,
  .slick-next {
    width: 40px; /* Set the width of the arrows */
    height: 40px; /* Set the height of the arrows */
    opacity: 1; /* Make the arrows fully visible */
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;
  }

  .slick-prev img,
  .slick-next img {
    width: 100%;
    height: 100%;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  .slick-prev:hover,
  .slick-next:hover {
    opacity: 0.8; /* Reduce opacity on hover */
  }
`;
