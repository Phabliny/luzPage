import styled from "styled-components";

export const StyledNavigation = styled.nav`
  background-color: #f8f8f8;
  border-color: transparent;
  border-width: 0;
  border-radius: 0;
  box-shadow: none;
  min-height: 60px;
  padding: 15px;
  position: relative;
  transition: all 0.3s ease-in-out;
  margin-bottom: 0px; ! important

  .navbar-header {
    display: flex;
    align-items: center;
  }

  .navbar-brand {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    color: #333;
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  .navbar-toggle {
    border-color: transparent;
    color: #333;
    &:hover,
    &:focus {
      background-color: transparent;
    }
    .icon-bar {
      background-color: #333;
    }
  }
`;

export const StyledNavbarCollapse = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #f8f8f8;
    width: 100%;
    z-index: 99;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    padding: 15px 0;
    transition: all 0.3s ease-in-out;
    display: ${(props) => (props.isSmallDevice ? "block" : "none")};

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;

      li {
        margin-bottom: 10px;
        display: inline-block;

        a {
          font-size: 16px;
          font-weight: 500;
          color: #333;
          text-transform: uppercase;
          display: block;
          padding: 10px 15px;
          &:hover,
          &:focus {
            color: #666;
            text-decoration: none;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: block !important;
  }
`;
