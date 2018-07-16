const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const WeightSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  value: Number,
  units: { type: String, enum: ['kg', 'lb'] },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Weight', WeightSchema);
