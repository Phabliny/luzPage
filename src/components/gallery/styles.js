// styles.js

import styled from "styled-components";

export const GalleryWrapper = styled.div`
  text-align: center;
  padding: 40px;
  min-height: 100vh;
`;

export const SectionTitle = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
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
