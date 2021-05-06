const router = require("express").Router();
const db = require("../models");

//add a new exercise to a new workout plan (new workout)

router.post("/", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

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

//view the combined weight of multiple exercises from the past seven workouts on the stats page.
router.get("/", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            },
        },
    ])
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

//view the total duration of each workout from the past seven workouts on the stats page.
router.get("/range", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            },
        },
    ])
        .sort({ _id: -1 })
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});


module.exports = router;


