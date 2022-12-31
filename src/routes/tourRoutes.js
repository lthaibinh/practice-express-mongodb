const express = require('express');
const tourController = require('../controllers/tourController')
const router = express.Router();

router
  .route('/')
  .get(tourController.getAllTours)
  // .post()

router
  .route('/:idTour')
  .get(tourController.getTour)

router
  .route('/tour-stats')
  .get(tourController.getTourStats)

router
  .route('/monthly-plan')
  .get(tourController.getMonthlyPlan)




module.exports = router