const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
mongoose.connect('mongodb+srv://dormision:almi123@cluster0.xegrt.mongodb.net/proyecto-db?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(db => console.log('DB is succesfully'))
  .catch(err => console.error(err));

app.use(cors());

//ajustes
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use('/api/temperatura', require('./routes/temperaturas'))

//server escuchando
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})

//Sensor
const Temp = require('./models/Temp');

var sensor = require("node-dht-sensor");
 
sensor.read(11, 4, function(err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
    function insTemp() {
      Temp.create({
        value: temperature,
        humedad: humidity,
        date: new Date()
      })
    };
    /*setInterval(insTemp, 10000);*/
  }
});