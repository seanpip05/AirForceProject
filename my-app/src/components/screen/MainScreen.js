import React, {useState, useEffect} from "react";
import { Container, ButtonContainer, Button, ShapeContainer} from "./screen.styles";
import { Rectangle, Circle, VisualFlexDiv } from "./visual.styles";
import { Ellipse, TextFlexDiv } from "./text.styles";

const MainScreen = ({ 
  onOpenPopup, 
  instrumentData = {
    id: null,
    altitude: 'value',
    his: 'value',
    adi: 'value'
  } 
}) => {
  const [isVisual, setIsVisual] = useState(true); 

  const handleButtonClick = (type) => {
    if (type === "Visual") {
      setIsVisual(true);
    } else if (type === "Text") {
      setIsVisual(false);
    }
  };

  // function to get the color of the circle
  const getCircleColor = () => {
    if (instrumentData.adi === 100) {
      return "blue";
    } else if (instrumentData.adi === 0) {
      return "green";
    }
    return ""; // default color
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
        <Circle style={{ backgroundColor: getCircleColor() }}/>
      </ShapeContainer>
    ) : (
      <ShapeContainer>
        <Ellipse>
          <TextFlexDiv>
            <div>Altitude</div>
            <div>{instrumentData.altitude}</div>
          </TextFlexDiv>
        </Ellipse>
        <Ellipse>
          <TextFlexDiv>
            <div>HIS</div>
            <div>{instrumentData.his}</div>
          </TextFlexDiv>
        </Ellipse>
        <Ellipse>
          <TextFlexDiv>
            <div>ADI</div>
            <div>{instrumentData.adi}</div>
          </TextFlexDiv>
        </Ellipse>
      </ShapeContainer>
    )};
    </Container>
  );
};

export default MainScreen;