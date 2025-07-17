const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: String,
    color: String,
    type: String,
    manaConst: String,
    set: String
});

module.exports = mongoose.model('Card', cardSchema);