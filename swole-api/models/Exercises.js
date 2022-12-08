const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    Name: String,
    Reps: Number,
    Muscle: String,
    Tips: String,
    Image: String
})

const Exercises = mongoose.model('Exercises', workoutSchema)
module.exports = Exercises