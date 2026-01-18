const mongoose = require("mongoose");

const viniloSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        descripcion: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Vinilo = mongoose.model('Vinilo', viniloSchema);

module.exports = Vinilo;