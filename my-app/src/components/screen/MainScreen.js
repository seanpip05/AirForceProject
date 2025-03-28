import React from "react";
import { Container, ButtonContainer, Button, ShapeContainer, Rectangle, Circle, FlexDiv } from "./MainScreen.styles";

// @TODO split the main screen into 2 components, a visual and a text 
const MainScreen = ({ onOpenPopup }) => {
  return (
    <Container>
      <ButtonContainer>
        <Button>Text</Button>
        <Button>Visual</Button>
        <Button onClick={onOpenPopup}>+</Button>
      </ButtonContainer>

      <ShapeContainer>
        <Rectangle>
          <FlexDiv>
            <div>3000</div>
            <div>2000</div>
            <div>1000</div>
            <div>0</div>
          </FlexDiv>
        </Rectangle>
        <Circle />
        <Circle />
      </ShapeContainer>
    </Container>
  );
};

export default MainScreen;
