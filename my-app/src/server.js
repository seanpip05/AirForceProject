const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/formDataDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Schema
const formSchema = new mongoose.Schema({
  altitude: Number,
  his: Number,
  adi: Number,
});

// Create a Model
const FormData = mongoose.model("FormData", formSchema);

// Route to handle form submission
app.post("/submit", async (req, res) => {
  try {
    const newData = new FormData(req.body);
    await newData.save();
    res.json({ success: true, message: "Data saved successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the Server
app.listen(5000, () => console.log("Server running on port 5000"));
