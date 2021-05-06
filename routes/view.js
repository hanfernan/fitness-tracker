const router = require("express").Router();
const Workout = require("../models/workout");

//add exercise to most recent workout plan
router.post("/workouts", ({ body }, res) => {
    const exercise = new Workout(body);

    Workout.create(exercise)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(dbWorkout)
        })
});

//add a new exercise to a new workout plan

//view the combined weight of multiple exercises from the past seven workouts on the stats page.


//view the total duration of each workout from the past seven workouts on the stats page.

module.exports = Workout; 