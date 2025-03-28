import React from "react";
import { Container, Button } from "./MainScreen.styles";



const MainScreen = ({ onOpenPopup }) => {
  return (
    <Container>
      <Button onClick={onOpenPopup}>Open Popup</Button>
    </Container>
  );
};

export default MainScreen;