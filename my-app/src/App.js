import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/App.css';
import MainScreen from './components/screen/MainScreen';
import Popup from './components/popup/Popup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [instrumentData, setInstrumentData] = useState({
    id: null,
    altitude: 'value',
    his: 'value',
    adi: 'value'
  });

  // fetch instantly
  useEffect(() => {
    fetchLatestData();
  }, []);

  const fetchLatestData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data', {
        params: {
          sort: 'id',
          order: 'desc',
          limit: 1
        }
      });
      
      if (response.data.data && response.data.data.length > 0) {
        const latestData = response.data.data[0];
        setInstrumentData({
          id: latestData.id,
          altitude: latestData.altitude,
          his: latestData.his,
          adi: latestData.adi
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleDataSubmit = async () => {
    await fetchLatestData();
  };

  return (
    <div>
      <MainScreen 
        onOpenPopup={handleOpenPopup}
        instrumentData={instrumentData}
      />
      {isPopupOpen && (
        <Popup 
          onClose={handleClosePopup} 
          onDataSubmit={handleDataSubmit}
        />
      )}
    </div>
  );
}

export default App;