const Exercise = (props) => {



    return(
        <div>
            <img className="card-img-top" src={props.exercise.image} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">Name: {props.exercise.name}</h5>
                <p className="card-text">Muscle: {props.exercise.muscle}</p>
                <p className="card-text">Recommended Reps: {props.exercise.reps}</p>
                <a className="btn btn-info" href={props.exercise.tips}>Tips</a>
            </div>
        </div>
    )
}


export default Exercise


