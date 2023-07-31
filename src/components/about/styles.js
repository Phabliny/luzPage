import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

export const AboutImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
`;
