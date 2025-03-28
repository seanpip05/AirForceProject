import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container, ButtonContainer, Button, ShapeContainer} from "./screen.styles";
import { Rectangle, Circle, VisualFlexDiv } from "./visual.styles";
import { Ellipse, TextFlexDiv } from "./text.styles";

const MainScreen = ({ onOpenPopup }) => {
  const [isVisual, setIsVisual] = useState(true); 
  const [instrumentData, setInstrumentData] = useState({
    altitude: 'value',
    his: 'value',
    adi: 'value'
  });

  // function to fetch the data
  const fetchLatestData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data');
      
      if (response.data.data && response.data.data.length > 0) {
        const latestData = response.data.data[0];
        setInstrumentData({
          altitude: latestData.altitude,
          his: latestData.his,
          adi: latestData.adi
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // fetch the data each time i enter the page
  useEffect(() => {
    if (!isVisual) {
      fetchLatestData();
    }
  }, [isVisual]);

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
