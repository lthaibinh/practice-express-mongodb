const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: false,
    select: false
  },
  slug: String,
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

},{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
})
tourSchema.virtual('durationWeeks').get( function(){
  return this.duration / 7
})

tourSchema.pre('save', function(next){
  console.log('presave doc');
  next();
})

tourSchema.post('save', function(doc, next){
  console.log('save doc',doc);
  next();
})

const Tour = mongoose.model('Tour', tourSchema)
module.exports = Tour;