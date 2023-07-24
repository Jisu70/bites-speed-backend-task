const express = require('express');
require("dotenv").config();

const app = express();
app.use(express.json());


// Routes
const identifyRoute = require('./routes/identifyRoutes')
app.use('/api', identifyRoute)


// Start the server
app.listen(process.env.PORT || 5000 , () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
