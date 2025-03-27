import React, { useState } from "react";
import MainScreen from "./MainScreen";
import Popup from "./Popup";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <MainScreen/>
      <Popup/>
    </>
  );
};

export default App;