
const Workout = (props) => {
    return(
    <>
        <h3>Name: {props.workout.name}</h3>
        <h4>Muscle Group: {props.workout.muscleGroup}</h4>
        <h5>Recommended Reps: {props.workout.reps}</h5>
        <h5>Rating: {props.workout.reps}</h5>
        <img>{props.workout.image}</img>
        <p>Comments: {props.workout.comments}</p>
        <p>Tips: {props.workout.tips}</p>
    </>
    )
}

export default Workout