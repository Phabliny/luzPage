// styles.js

import styled from "styled-components";

export const GalleryWrapper = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const Description = styled.p`
  font-size: 16px;
`;

export const GalleryContainer = styled.div`
  margin-top: 40px;
`;

export const GalleryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  padding: 10px;
`;

export const CarouselGrande = styled.div`
  display: none;
`;

export const CarouselMedio = styled.div`
  display: none;
`;

export const CarouselPequeno = styled.div`
  display: inline-block;
`;


