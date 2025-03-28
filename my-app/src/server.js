const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const app = express();

app.use(cors());
app.use(express.json());

// connection
mongoose.connect('mongodb://localhost:27017/instrumentDataDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// scheme creation
const instrumentSchema = new mongoose.Schema({
  altitude: {
    type: Number,
    min: [0, 'Altitude must be at least 0'],
    max: [3000, 'Altitude cannot exceed 3000']
  },
  his: {
    type: Number,
    min: [0, 'HIS must be at least 0'],
    max: [360, 'HIS cannot exceed 360']
  },
  adi: {
    type: Number,
    min: [-100, 'ADI cannot be less than -100'],
    max: [100, 'ADI cannot exceed 100']
  },
  creationTime: {
    type: Date,
    default: Date.now
  }
}, { 
// Disable automatic timestamps
timestamps: false 
});

// Use mongoose-auto-increment for id
instrumentSchema.plugin(require('mongoose-sequence')(mongoose), {
inc_field: 'id',
start_seq: 1 // start numbering from 1
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
      altitude: 1002,
      his: 100,
      adi: 0
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
      
      const newData = new InstrumentData({ 
        altitude, 
        his, 
        adi
      });
  
      // validate the new data before saving
      await newData.validate();
  
      await newData.save();
      
      res.status(201).json({ 
        success: true, 
        message: 'המידע נשמר בהצלחה',
        data: newData 
      });
    } catch (error) {
      console.error('Validation or save error:', error);
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
    const data = await InstrumentData.find()
      .sort({ creationTime: -1 }) // Sort by creationTime in descending order
      .limit(1); // Limit to the most recent entry
    
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