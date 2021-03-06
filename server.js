// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
const server = app.listen(port, () => {
    console.log(`running server on local host at port: ${port}`);
})

// API: Get projectData
app.get('/projectData', (req, res) => {
    res.send(projectData);
})

// API: Post projectData
app.post('/projectData', (req, res) => {
    const reqBody = req.body;
    console.log('req.body:', req.body);
    const {temperature, date, userResponse}  = reqBody;
    projectData.temperature = temperature;
    projectData.date = date;
    projectData.userResponse = userResponse;
    res.send(projectData);
})