
const Tour = require('../models/tourModel')
const APIFeatures = require('./../utils/APIFeatures')

exports.getAllTours = async (req, res) => {
  try{
    console.log(req.query);
    /*
    const queryObj = {...req.query}
    const excludedFields = ['page', 'sort', 'limit', 'fields']
    excludedFields.forEach( el => delete queryObj[el])

    let queryStr = JSON.stringify(queryObj)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

    let tours = await Tour.find(JSON.parse(queryStr))
    */

    const features = new APIFeatures(Tour.find(), req.query).filter().sort();
    const tours = await features.query;

    res.status(200).json({
      status: 'success',
      requestAt: req.requestTime,
      results: tours.length,
      data: {
        tours
      }
    })

  }catch(e){
    res.status(400).json({
      status: 'fail',
      requestAt: req.requestTime,
      message: e
    })
  }
}

exports.getAllTours1 = (req, res) => {
  res.status(200).json({
    status: 'success binhtest',
    requestAt: req.requestTime,
    results: 'result binhtest',
    data: {
      tours: [
        {
          name: 'test1 binhtest'
        },
        {
          name: 'test2 binhtest'
        }
      ]
    }
  })
}

exports.getTourStats = async ( req, res) => {
  try {
    const stats = await Tour.aggregate([
      {
        $match: { price: {$gte: 40} }
      },
      {
        $group: {
          // _id : null,
          _id: '$duration',
          numTours: {$sum: 1},
          avgRating: { $avg: '$rating' },
          minRating: { $min: '$rating' },
          maxRating: { $max: '$rating' },
        }
      },
      {
        $sort: { minRating: 1 }
      },
      {
        $match: { _id: { $ne: 82 } }
      }
    ])
    res.status(200).json({
      status: 'success binhtest',
      requestAt: req.requestTime,
      results: 'result binhtest',
      data: {
        stats
      }
    })
  } catch (error) {
    
  }
}

exports.getMonthlyPlan = async ( req, res) => {
  try {
    const plan = await Tour.aggregate([
      {
        $unwind: '$price'
      }
    ])

    res.status(200).json({
      status: 'success binhtest',
      requestAt: req.requestTime,
      results: 'result binhtest',
      data: {
        plan
      }
    })
  }catch(e){
    res.status(400).json({
      status: 'fail',
      requestAt: req.requestTime,
      message: e
    })
  }
}