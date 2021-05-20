const mongoose = require('mongoose');
//Esquema y exportacion de modelo mongoose
const Temp = new mongoose.Schema({    
    value: Number,
    humidity: Number,
    date: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Temperatura', Temp);