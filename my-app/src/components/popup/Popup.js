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
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { altitude, his, adi } = formData;

    if (altitude < 0 || altitude > 3000) {
      setErrorMessage('Altitude must be between 0 and 3000.');
      return false;
    }

    if (his < 0 || his > 360) {
      setErrorMessage('HIS must be between 0 and 360.');
      return false;
    }

    if (adi < -100 || adi > 100) {
      setErrorMessage('ADI must be between -100 and 100.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // prevent submission
    }

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
      <PopupContainer onClick={(e) => e.stopPropagation()}> {/* dont let press on popup close it */}
        <h2>Inputs Page</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* display error */}
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
