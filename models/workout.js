// requiring mongoose
const mongoose = require("mongoose");

// creating mongoose schema 
const Schema = mongoose.Schema;

// new schema will be based on the date
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  // exercises based on type, name, duration, weight, reps, sets, distance
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
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