import React, { useState } from "react";
import MainScreen from "./components/screen/MainScreen";
import Popup from "./components/popup/Popup";
import "./css/App.css";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <>
      <MainScreen onOpenPopup={() => setIsPopupOpen(true)} />
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </>
  );
};

export default App;
