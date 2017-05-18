const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TruckSchema = new Schema({
  vehicleType: { type: String, default: "truck" },
  make: String,
  sleeperCab: Boolean,
  numAxles: Number,
  horsepower: Number
});

const Truck = mongoose.model("truck", TruckSchema, "vehicles");
module.exports = Truck;
