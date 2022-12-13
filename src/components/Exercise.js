const Exercise = (props) => {



    return(
        <div className="card">
            <img className="card-img-top bg-info text-white" alt="..." src={props.exercise.image}></img>
            <div className="card-body">
                <h5 className="card-title">Name: {props.exercise.name}</h5>
                <p className="card-text">Muscle: {props.exercise.muscle}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item bg-secondary">Recommended Reps: {props.exercise.reps}</li>
            </ul>
            <div className="card-body">
                <a href={props.exercise.tips} className="btn btn-primary">Tips</a>
            </div>
        </div>
    )
}


export default Exercise


