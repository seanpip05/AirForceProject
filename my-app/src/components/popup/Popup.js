import React from "react";
import { Overlay, PopupContainer, InfoRow, LeftBox, RightInput, Button } from "./Popup.styles";
import { ReactComponent as ArrowIcon } from '../../assests/arrow.svg';

const Popup = ({ onClose }) => {
    return (
      <Overlay onClick={onClose}> {/* Close when clicking outside */}
        <PopupContainer onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
            <h2>Inputs Page</h2>
            <InfoRow>
                <LeftBox>Altitude</LeftBox>
                <RightInput type="text" placeholder="Altitude"/>
            </InfoRow>
            <InfoRow>
                <LeftBox>HIS</LeftBox>
                <RightInput type="text" placeholder="HIS" />
            </InfoRow>
            <InfoRow>
                <LeftBox>ADI</LeftBox>
                <RightInput type="text" placeholder="ADI" />
            </InfoRow>
            <Button onClick={onClose}>
                <ArrowIcon />
                <span>Send</span>
            </Button>
        </PopupContainer>
      </Overlay>
    );
};


export default Popup;
