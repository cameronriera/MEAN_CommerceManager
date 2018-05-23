let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

var ProductSchema = new mongoose.Schema({
  name : {
    type : String,
    required: [true, "Name is required"],
    unique: [true, "Name already taken"],
    minlength: [3, "Name must be at least 3 characters."] 
  },
  quantity : {
    type : Number,
    min: [0, "Quantity must be greater than or equal to 0"],   
    required: [true, "Quantity is required"],
  },
  price : {
    type: Number,
    min: [0, "Price must be greater than or equal to 0"],   
    required: [true, "Price is required"],
  }
})

ProductSchema.plugin(uniqueValidator, { message: "Product name is already taken!"});
module.exports = mongoose.model('Product', ProductSchema);