import styled from "styled-components";

export const Rectangle = styled.div`
    width: 7%;
    height: 100%;
    background-color: #3498db;
    margin-right: 20px;
    border: solid 2px;

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

export const RightArrow = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`;

export const HeadingCircle = styled(Circle)`
  position: relative;
  border: 2px solid black;
`;

// Styled arrow component
export const Arrow = styled.div`
  position: absolute;
  width: 2px;
  background-color: black;
  transform-origin: bottom center;
  left: 50%;
`;