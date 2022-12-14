import {useState} from 'react'

const Edit = (props) => {
    const [exercise, setExercise] = useState({...props.exercise})

    const handleChange = (event) => {
    setExercise({...exercise, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(exercise)
    }

    return(
        <>
        <details>
            <summary>Edit</summary>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='name'>Name:</label>
                <input type='text' className="form-control" name='name' onChange={handleChange} value={props.exercise.name}/>
            </div>
            <div className="form-group">
                <label htmlFor='reps'>Recomended Reps: {exercise.reps}</label>
                <input type='number' name='reps' onChange={handleChange} value={props.exercise.reps}/>
            </div>
            <div className="form-group">
                <label htmlFor='muscle'>Muscle:</label>
                <input type='text' className= "form-control" name='muscle' onChange={handleChange} value={props.exercise.muscle}/>
            </div>
            <div className="form-group">
                <label htmlFor='tips'>Tips:</label>
                <input type='text' className="form-control" name='tips' onChange={handleChange} value={props.exercise.tips}/>
            </div>
            <div className="form-group">
                <label htmlFor='image'>Image:</label>
                <input type='text' className="form-control" name='image' onChange={handleChange} value={props.exercise.image}/>
            </div>
            <input type="submit"/>
            </form>
        </details>
        </>
    )
}

export default Edit