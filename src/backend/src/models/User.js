const { Schema, mongoose} = require("mongoose");

exports.module = (mongoose) =>{
    const schema = new Schema(
        {
            id: {type: Number, required: true},
            name: {type: String, required: true},
            email: {type: String, required: true}
        }
    )
}