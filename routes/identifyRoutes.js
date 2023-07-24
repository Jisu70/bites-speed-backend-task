//Dependencies
const express = require('express') ;
const router = express.Router() ;

// Identify controlleer 
const  identifyUser  = require('../controllers/indentifyController')

// Endpoints
router.get('/identify', identifyUser) ;

//Exporting Router
module.exports = router ;