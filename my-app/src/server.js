const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// connection
mongoose.connect('mongodb://localhost:27017/instrumentDataDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// not useful anymore, just created a scheme like this 
const instrumentSchema = new mongoose.Schema({
  altitude: Number,
  his: Number,
  adi: Number,
  createdAt: { type: Date, default: Date.now }
});
const InstrumentData = mongoose.model('InstrumentData', instrumentSchema);

// just for checking that the server is alive
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// just for testing
app.get('/test-create', async (req, res) => {
  try {
    const testData = new InstrumentData({
      altitude: 5000,
      his: 45,
      adi: 22
    });
    
    const savedData = await testData.save();
    
    res.json({ 
      success: true, 
      message: 'Test document created successfully',
      data: savedData 
    });
  } catch (error) {
    console.error('Test create error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error creating test document',
      error: error.message 
    });
  }
});

// POST Route
app.post('/submit', async (req, res) => {
  try {
    const { altitude, his, adi } = req.body;
    
    const newData = new InstrumentData({ altitude, his, adi });
    await newData.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Data saved successfully',
      data: newData 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error saving data',
      error: error.message 
    });
  }
});

// GET Route
app.get('/data', async (req, res) => {
  try {
    const data = await InstrumentData.find().sort({ createdAt: -1 });
    res.json({ 
      success: true, 
      data 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error retrieving data',
      error: error.message 
    });
  }
});

// Mongoose connection logging
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});