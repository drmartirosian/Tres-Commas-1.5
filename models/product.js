var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number },
        userRef: {}
    },
    {
        timestamps: true
    }
    );

module.exports = mongoose.model('Product', productSchema);