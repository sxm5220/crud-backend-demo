const mongoose = require('mongoose')
//产地schema
const PlaceSchema = mongoose.Schema(
    {
        //名称
        name: {
            type: String,
            required: true
        },
        //距离
        distance:{
            type:Number,
            required:true
        }
    },
    {
        timestamps: true
    }
)

const Place = mongoose.model("Place",PlaceSchema)
module.exports = Place