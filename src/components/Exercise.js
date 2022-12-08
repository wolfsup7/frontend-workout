
const Exercise = (props) => {
    return(
    <>
        <h3>Name: {props.Ecercise.Name}</h3>
        <h5>Recommended Reps: {props.Exercise.Reps}</h5>
        <h4>Muscle: {props.Exercise.Muscle}</h4>
        <p>Tips: {props.Exercise.Tips}</p>
        <div>{props.Exercise.Image}</div>
    </>
    )
}

export default Exercise
