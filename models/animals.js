const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalsSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, },
    type: { type: String },
    breeds: { type: String },
    gender: { type: String },
    age: { type: Number },
    photo: { type: Image},
    status: { type: String},
    // phone number
    contact: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const Animals = mongoose.model("Animals", animalsSchema);

module.exports = Animals;