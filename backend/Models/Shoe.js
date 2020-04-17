const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let shoeSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    id: {
        type: Number
    }
}, {
    collection: 'shoes'
}
)

module.exports = mongoose.model('Shoe', shoeSchema)