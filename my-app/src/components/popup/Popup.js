import React, { useState } from "react";
import { Overlay, PopupContainer, InfoRow, LeftBox, RightInput, Button } from "./Popup.styles";
import { ReactComponent as ArrowIcon } from '../../assests/arrow.svg';
import axios from 'axios';

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    altitude: '',
    his: '',
    adi: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', {
        altitude: parseFloat(formData.altitude),
        his: parseFloat(formData.his),
        adi: parseFloat(formData.adi)
      });
      
      alert(response.data.message);
      onClose();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit data');
    }
  };

  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <h2>Inputs Page</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InfoRow>
            <LeftBox>Altitude</LeftBox>
            <RightInput 
              type="number" 
              name="altitude"
              placeholder="Altitude"
              value={formData.altitude}
              onChange={handleInputChange}
              required
            />
          </InfoRow>
          <InfoRow>
            <LeftBox>HIS</LeftBox>
            <RightInput 
              type="number" 
              name="his"
              placeholder="HIS"
              value={formData.his}
              onChange={handleInputChange}
              required
            />
          </InfoRow>
          <InfoRow>
            <LeftBox>ADI</LeftBox>
            <RightInput 
              type="number" 
              name="adi"
              placeholder="ADI"
              value={formData.adi}
              onChange={handleInputChange}
              required
            />
          </InfoRow>
          <Button type="submit">
            <ArrowIcon />
            <span>Send</span>
          </Button>
        </form>
      </PopupContainer>
    </Overlay>
  );
};

export default Popup;