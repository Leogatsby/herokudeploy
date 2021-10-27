const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req,res) =>{
    res.redirect('/main');
})

router.get('/main', (req,res) =>{
    res.sendFile(path.join(__dirname, '../', 'views' , 'main.html'));
})

router.get('/A', (req,res) =>{
    res.sendFile(path.join(__dirname, '../', 'views' , 'A.html'));
})

router.get('/B', (req,res) =>{
    res.sendFile(path.join(__dirname, '../', 'views' , 'B.html'));
})


module.exports = router;