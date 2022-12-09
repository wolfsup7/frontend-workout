const Exercise = (props) => {
    return(
        <div className="card">
            <div className="card-img-top" alt="...">{props.exercise.image}</div>
            <div className="card-body">
                <h5 className="card-title">Name: {props.exercise.name}</h5>
                <p className="card-text">Muscle: {props.exercise.muscle}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Recommended Reps: {props.exercise.reps}</li>
            </ul>
            <div className="card-body">
                <a href={props.exercise.tips} className="card-link">Tips</a>
            </div>
        </div>
    )
}


export default Exercise


