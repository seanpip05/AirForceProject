import React, {useState} from "react";
import { Container, ButtonContainer, Button, ShapeContainer} from "./screen.styles";
import { Rectangle, Circle, VisualFlexDiv } from "./visual.styles";
import { Ellipse, TextFlexDiv } from "./text.styles";

// @TODO split the main screen into 2 components, a visual and a text 
const MainScreen = ({ onOpenPopup }) => {
  const [isVisual, setIsVisual] = useState(true);  // State to toggle between Visual and Text

  const handleButtonClick = (type) => {
    if (type === "Visual") {
      setIsVisual(true);
    } else if (type === "Text") {
      setIsVisual(false);
    }
  };


  return (
    <Container>
      <ButtonContainer>
        <Button onClick={() => handleButtonClick("Text")} >TEXT</Button>
        <Button onClick={() => handleButtonClick("Visual")}>VISUAL</Button>
        <Button onClick={onOpenPopup}>+</Button>
      </ButtonContainer>

      {isVisual ? (
      <ShapeContainer>
        <Rectangle>
          <VisualFlexDiv>
            <div>3000</div>
            <div>2000</div>
            <div>1000</div>
            <div>0</div>
          </VisualFlexDiv>
        </Rectangle>
        <Circle />
        <Circle />
      </ShapeContainer>
    ) : (
      <ShapeContainer>
        <Ellipse>
          <TextFlexDiv>
            <div>Altitude</div>
            <div>value</div>
          </TextFlexDiv>
        </Ellipse>
        <Ellipse>
          <TextFlexDiv>
            <div>HIS</div>
            <div>value</div>
          </TextFlexDiv>
        </Ellipse>
        <Ellipse>
          <TextFlexDiv>
            <div>ADI</div>
            <div>value</div>
          </TextFlexDiv>
        </Ellipse>
      </ShapeContainer>
    )};
    </Container>
  );
};

export default MainScreen;
