const express = require('express');
const router = express.Router();

const Temp = require('../models/Temp');

//APIS 

router.get('/', async (req, res) => {
    if (JSON.stringify(req.query) != '{}') { //Si hay parámetros
        const lastTemp = await Temp.findOne({}).sort({_id:-1}).limit(1);
        console.log(req.query);
        var array = new Array(lastTemp);
        res.json(array);
    }
    else{
        const temperatura = await Temp.find();
        res.json(temperatura);
    }
});

module.exports = router;
