import styled from "styled-components";

export const FeaturesWrapper = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f9f9f9;
  min-height: 100vh;

  @media (max-width: 768px) {
    min-height: auto; /* Reset the min-height for smaller screens */
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 20px; /* Add some horizontal padding for smaller screens */
  }
`;

export const SectionTitle = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const FeaturesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const FeatureItem = styled.div`
  flex-basis: 20%;
  padding: 15px;
  background-color: ${(props) => (props.isOdd ? "#A2B4AC" : "#E4C8B8")};
  /* Fixed: Added the # symbol for the color when isOdd is true */
  border-radius: 10px;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    flex-basis: 45%;
  }

  @media (max-width: 768px) {
    flex-basis: 80%;
  }
`;

export const Icon = styled.i`
  font-size: 36px;
  margin-bottom: 15px;
  color: ${(props) => props.color || "#333"};
`;

export const FeatureTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const FeatureText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  text-align: justify;
`;
