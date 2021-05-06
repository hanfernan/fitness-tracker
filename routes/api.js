const router = require('express').Router();

const viewRoutes = require('./view');

router.use('/workouts', viewRoutes);

module.exports = router; 