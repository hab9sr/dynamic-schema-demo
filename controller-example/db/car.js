const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  vehicleType: { type: String, default: "car" },
  make: String,
  model: String,
  color: String,
  numSeats: Number
});

const Car = mongoose.model("car", CarSchema, "vehicles");
module.exports = Car;
