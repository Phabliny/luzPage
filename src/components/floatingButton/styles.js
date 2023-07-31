import styled from 'styled-components';

export const FloatingButtonContainer = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #128C7E;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}`;
