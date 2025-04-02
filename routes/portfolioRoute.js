const express=require('express');
const { sendEmail } = require('../controllers/PortfolioController');
const router=express.Router();


router.post('/sendEmail',sendEmail)

module.exports=router;