import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0},
})

const mealSchema = new Schema({
  name: String,
})

const flightSchema = new Schema({
  airline: {type: String, enum: ["American", "Southwest", "United", "Virgin Galactic"]},
  airport: {type: String, enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]},
  flightNo: {type: Number, min: 10, max: 9999},
  departs: {type: Date, default: Date.now() + 365*24*60*60000},
  tickets: [ticketSchema],
  meals: [{ type: Schema.Types.ObjectId, ref: 'Meal'}]
})


//compile schema into model and export
const Flight = mongoose.model('Flight', flightSchema)


export {
  Flight,
}