import styled from "styled-components";

export const ServicesContainer = styled.div`
  text-align: center;
  background-color: #f9f9f9;
  padding: 60px 0;
`;

export const ServicesTitle = styled.div`
  margin-bottom: 30px;
`;

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const ServiceIcon = styled.i`
  font-size: 48px;
  color: #c47538;
`;

export const ServiceDesc = styled.div`
  margin-top: 15px;

  h3 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #777;
  }
`;
