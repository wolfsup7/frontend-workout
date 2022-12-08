
const Exercise = (props) => {
    return(
    <>
        <h3>Name: {props.ecercise.Name}</h3>
        <h5>Recommended Reps: {props.Exercise.Reps}</h5>
        <h4>Muscle: {props.exercise.Muscle}</h4>
        <p>Tips: {props.exercise.Tips}</p>
        <img>{props.exercise.Image}</img>
    </>
    )
}

export default Exercise