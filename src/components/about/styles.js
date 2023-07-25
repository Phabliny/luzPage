import styled from "styled-components"

export const AboutWrapper = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Column = styled.div`
  flex: 0 0 48%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const AboutText = styled.div`
  color: #333;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;
