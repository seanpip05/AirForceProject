import styled from "styled-components";

export const Rectangle = styled.div`
    position: relative;
    width: 7%;
    height: 100%;
    background-color: #3498db;
    margin-right: 20px;
    border: solid 2px;

    @media (max-width: 480px) {
        width: 10%;
    }
`;

export const Circle = styled.div`
    width: 20%;
    height: 60%;
    border-radius: 50%;
    border: solid 2px;
`;

export const VisualFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;

export const RightArrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    width: 180px;  /* Length of the line */
    height: 2px;  /* Thickness of the line */
    background-color: black;
    margin-right: 5px; /* Space between line and arrow */
  }

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 12px solid black; /* Arrowhead */
  }

  @media (max-width: 480px) {
    &::before {
        width: 55px !important;
    }
  }

  @media (max-width: 1024px) {
    &::before {
        width: 90px;
    }
  }
`;

export const HeadingCircle = styled(Circle)`
  position: relative;
  border: 2px solid black;
`;

export const Arrow = styled.div`
    position: absolute;
    width: 2px;
    background-color: black;
    transform-origin: bottom center;
    left: 50%;

    @media (max-width: 1024px) {
        height: 30% !important;
        top: 25% !important;
    }

    @media (max-width: 480px) {
        height: 15% !important;
        top: 40% !important;
    }

`;