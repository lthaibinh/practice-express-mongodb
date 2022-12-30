const express = require('express');
const tourController = require('../controllers/tourController')
const router = express.Router();

router
  .route('/')
  .get(tourController.getAllTours)
  // .post()
router
  .route('/tour-stats')
  .get(tourController.getTourStats)

router
  .route('/monthly-plan')
  .get(tourController.getMonthlyPlan)

router
  .route('/:id')
  .get(tourController.getAllTours1)
  // .post()
  // .patch()
  // .delete()

module.exports = router