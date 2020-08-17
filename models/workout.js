const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema (
    {
        day: {
                type: Date,
                default: () => new Date ()
            },

        exercises: [ {
                type: {
                        type: String,
                        trim: true,
                        required: true
                        },
                name: {
                        type: String,
                        trim: true,
                        required: true
                        },
                duration: {
                        type: Number,
                        required: true
                        },
                weight: {
                        type: Number
                        },
                sets: {
                        type: Number
                         },
                reps: {
                        type: Number
                        },
                duration: {
                        type: Number
                        }
                    
                    } 
                ]
            },
                {    
                toJSON: {
                        virtuals: true
                        }
        
                }
        
            )


            workoutSchema.virtual("totalDuration").get(function() {
                return this.exercises.reduce((total, exercise) => {
                    return total + exercise.duration
                }, 0)
            })

            const Workout = mongoose.model("workout", workoutSchema);
            module.exports = Workout;