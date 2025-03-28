import React, {useState} from "react";
import { Container, ButtonContainer, Button, ShapeContainer} from "./screen.styles";
import { Rectangle, Circle, VisualFlexDiv, RightArrow, HeadingCircle, Arrow } from "./visual.styles";
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

  // Component for the custom heading circle
  const HeadingIndicator = () => {
    // Convert HIS value to rotation angle
    const hisValue = parseFloat(instrumentData.his) || 0;
    
    return (
      <HeadingCircle>
        {/* Zero reference arrow - always points straight up */}
        <Arrow 
          style={{
            height: '40%', 
            top: '15%', 
          }} 
        />
        
        {/* HIS value arrow - rotates based on HIS value */}
        <Arrow 
          style={{
            height: '50%', 
            top: '10%', 
            transform: `rotate(${hisValue}deg)`,
            backgroundColor: 'orange'
          }} 
        />
        {/* Circle markings */}
        <div style={{position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)'}}>0</div>
        <div style={{position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)'}}>180</div>
        <div style={{position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)'}}>270</div>
        <div style={{position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)'}}>90</div>
      </HeadingCircle>
    );
  };

  const getArrowPosition = () => {
    const altitude = parseFloat(instrumentData.altitude);
  
    if (altitude < 1000) {
      return (
        <>
          <div>3000</div>
          <div>2000</div>
          <div>1000</div>
          <p style={{width: "max-content"}}>-------------------------------------<RightArrow /></p>            
          <div>0</div>
        </>
      );
    }
    
    if (altitude < 2000) {
      return (
        <>
          <div>3000</div>
          <div>2000</div>
          <p style={{width: "max-content"}}>-------------------------------------<RightArrow /></p>            
          <div>1000</div>
          <div>0</div>
        </>
      );
    }
    
    return (
      <>
        <div>3000</div>
        <p style={{width: "max-content"}}>-------------------------------------<RightArrow /></p>            
        <div>2000</div>
        <div>1000</div>
        <div>0</div>
      </>
    );
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
              {getArrowPosition()}
            </VisualFlexDiv>
          </Rectangle>
          <HeadingIndicator />
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
      )}
    </Container>
  );
};

export default MainScreen;