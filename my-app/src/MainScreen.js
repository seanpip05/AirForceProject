import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const MainScreen = ({ onOpenPopup }) => {
  return (
    <Container>
      <Button onClick={onOpenPopup}>Open Popup</Button>
    </Container>
  );
};

export default MainScreen;