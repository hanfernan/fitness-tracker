const router = require('express').Router();

const WorkoutRoutes = require('./workoutRoutes');

router.use('/api/workouts', WorkoutRoutes);

module.exports = router; 