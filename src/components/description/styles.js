import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 100px;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 39.75vw;

  @media (max-width: 768px) {
    /* Adjust width for smaller screens */
    width: 80vw;
  }
`;

export const ImageContainer = styled.div`
  margin: 0 10px 0 0;
  position: relative;
  img {
    margin: 0;
    width: 250px;
    height: 250px;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
  }


  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 100%;
    width: 100px; /* Adjust the overlap size as needed */
    height: 100px; /* Adjust the overlap size as needed */
    border-top-right-radius: 100px;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 768px) {
    /* Adjust position and size for smaller screens */
    img {
      width: 150px;
      height: 150px;
    }

    &:after {
      top: 150px;
      left: 150px;
      width: 50px;
      height: 50px;
    }
  }
`;

export const TextContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Align child elements to the center */

  p {
    width: 200px;
    font-size: 18px;
    color: black;
    font-family: 'Itim', sans-serif;
    text-align: center; /* Align the text in the center */
    margin-top: 20px; /* Add some space between the two elements */
  }
`;
