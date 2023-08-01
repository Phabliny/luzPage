import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 117px 20px 117px 20px;
  border-radius: 8px;
  text-align: center;
  width: 55vw;
  margin: 0 auto;
`;

export const SectionTitle = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  background-color: rgba(245, 245, 220, 0.5);
  border-radius: 10%;
`;

export const AboutImage = styled.img`
  width: 300px;
  height: auto;
  // border-top-right-radius: 50%;
  // border-bottom-left-radius: 50%;
  margin-top: 30px;
  margin-right: 70px;
`;

export const AboutText = styled.p`
  width: 100%;
  heigth:100%;
  font-family: 'Trirong', sans-serif;
  font-size: 19px;
  line-height: 1.6;
  color: #333;
  display: flex; /* Add this to make it a flex container */
  align-items: center; /* Vertically center the content */
  text-align: justify;
  margin-top: 25px;
  padding: 20px;
  background-color: rgba(245, 245, 220, 0.7);
  border-radius: 10%;
`;
