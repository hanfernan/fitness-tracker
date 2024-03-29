const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter resistance or cardio"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for exercise"
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ],
    totalDuration: {
        type: Number,
        default: 0,
    }

});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;