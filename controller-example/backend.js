const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dynamic-schema-demo');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.post('/', function(req, res) {
  var vehicle = req.body;

  if (vehicle.vType == "car") {
    const Car = require('./db/car');
    Car.create(vehicle, function(err, car) {
      res.send(car);
    });
  }

  if (vehicle.vType == "truck") {
    const Truck = require('./db/truck');
    Truck.create(vehicle, function(err, truck) {
      res.send(truck);
    });
  }
});

app.listen(3000, "localhost", function() {
  console.log("Dynamic controller demo running on port 3000");
});
