const express = require('express');
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()


//Get all Workouts
router.get('/', getWorkouts)

//Get a single workouts
router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router