//Dependencies
const express = require('express') ;
const router = express.Router() ;

// Identify controlleer 
const  identifyUser  = require('../controllers/indentifyController')

// Endpoints
router.post('/identify', identifyUser) ;

//Exporting Router
module.exports = router ;