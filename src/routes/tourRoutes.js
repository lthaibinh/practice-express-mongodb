const express = require('express');
const tourController = require('../controllers/tourController')
const router = express.Router();

router
  .route('/')
  .get(tourController.getAllTours)
  // .post()

router
  .route('/:id')
  .get(tourController.getAllTours1)
  // .post()
  // .patch()
  // .delete()

module.exports = router