const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalsSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, },
    type: { type: String },
    breed: { type: String },
    gender: { type: String },
    age: { type: Number },
    status: { type: String, required: true },
    // phone number
    contact: { type: Number, required: true },
    date: { type: Date }
});

const Animals = mongoose.model("Animals", animalsSchema);

module.exports = Animals;