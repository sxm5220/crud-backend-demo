const mongoose = require('mongoose')
//产品schema
const ProductSchema = mongoose.Schema(
    {
        //产品名称
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },
        //数量
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        //价格
        price: {
            type: Number,
            required: true,
            default: 0
        },
        //图片
        image: {
            type: String,
            required: false
        },
        //产地id
        placeId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Place"
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product",ProductSchema)
module.exports = Product