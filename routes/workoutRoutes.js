const router = require("express").Router();
const db = require("../models");

//add exercise to most recent workout plan (continue workout)
router.put("/:id", ({ body, params }, res) => {

    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//add a new exercise to a new workout plan (new workout)

router.post("/", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//view the combined weight of multiple exercises from the past seven workouts on the stats page.
// router.get("/", ({ body }, res) => {
//     db.Workout.find({})
//     .populate
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
// }
//view the total duration of each workout from the past seven workouts on the stats page.
// ("/range")
// db.workout.aggregate ( [
//     {
//         $addFields: {
//             totalDuration: { $sum: "$exercises.duration"}
//         }
//     }
// ]);

module.exports = db.Workout;


