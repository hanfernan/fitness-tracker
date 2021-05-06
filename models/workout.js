const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a type for exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for exercise"
            },
            duration: {
                type: Number,
                required: "Enter an amount"
            },
            weight: {
                type: Number,
                required: "Enter an amount"
            },
            reps: {
                type: Number,
                required: "Enter an amount"
            },
            sets: {
                type: Number,
                required: "Enter an amount"
            }
        }
    ],
    totalDuration: {
        type: Number,
        default: 0,
    }

});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;