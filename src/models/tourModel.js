const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    select: false
  },
  name: {
    type: String,
    required: [true, 'a tour must have a name'],
    unique: true
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    required: [true, 'a tour must have a cover images']
  },
  images: [String],
  createAt: {
    type: Date,
    default: Date.now()
  }

})

const Tour = mongoose.model('Tour', tourSchema)
module.exports = Tour;