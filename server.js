const express = require("express");
const cors = require('cors');
const app = express();
const mongoose=require('mongoose');
const port = process.env.PORT || 4000;
const data_product = require("./data");
const Advertisment=require('./models/mongoose');
const bodyParser = require('body-parser');

app.use(cors()); // Allow requests from any origin

mongoose.connect('mongodb+srv://kushana:Izn5o0iC865jB8yg@cluster0.erqc8h4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
   { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use(bodyParser.json());

app.post('/submit-add',async(req,res)=>
    {const{id,company_name,title,duration,job_type,location} = req.body;

  const newAddvetisment = new Advertisment({id,company_name,title,duration,job_type,location}); // Create a new Tutorial instance

  try {
    await newTutorial.save(); 
    res.status(200).send('Tutorial submitted successfully!'); 
  } catch (err) {
    res.status(500).send('Error submitting tutorial.'); // Handle errors and send an error response
  }

  });

// Define the route to serve data
app.get("/displayData", (req, res) => {
    res.json(data_product); // Send data_product directly
  });

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
