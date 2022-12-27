
const Tour = require('../models/tourModel')

class APIFeatures {
  constructor(query, queryString){
    this.query = query
    this.queryString = queryString
  }

  filter(){
    const queryObj = {...this.queryString};
    
    let queryStr = JSON.stringify(queryObj)
    this.query.find(JSON.parse(queryStr))
  }
}

exports.getAllTours = async (req, res) => {
  try{
    console.log(req.query);

    const queryObj = {...req.query}
    const excludedFields = ['page', 'sort', 'limit', 'fields']
    excludedFields.forEach( el => delete queryObj[el])

    let queryStr = JSON.stringify(queryObj)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

    let tours = await Tour.find(JSON.parse(queryStr))

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