const express = require('express');
require("dotenv").config();

const app = express();
app.use(express.json());

// 
app.get('/', (req, res) =>{
  res.send("Hello world ")
})


// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
