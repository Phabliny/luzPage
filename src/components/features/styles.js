import styled from "styled-components";

export const FeaturesWrapper = styled.div`
  text-align: center;
  padding: 100px 0 25px 100px;

  @media (max-width: 768px) {
    min-height: auto;
  }

  background: linear-gradient(
    -45deg,
    rgba(219, 163, 125, 0.4) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(227, 187, 157, 0.4) 100%
  );
  background-size: 300% 300%;
  animation: gradientAnimation 7s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const SectionTitle = styled.div`

`;

export const Title = styled.h2`
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
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
  border-radius: 10px;
  // margin-bottom: 10px;

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
