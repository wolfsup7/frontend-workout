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
                <input type='text' className="form-control" name='name' onChange={handleChange} value={exercise.name}/>
            </div>
            <div className="form-group">
                <label htmlFor='reps'>Recomended Reps:</label>
                <input type='text' name='reps' onChange={handleChange} value={exercise.reps}/>
            </div>
            <div className="form-group">
                <label htmlFor='muscle'>Muscle:</label>
                <input type='text' className= "form-control" name='muscle' onChange={handleChange} value={exercise.muscle}/>
            </div>
            <div className="form-group">
                <label htmlFor='tips'>Tips:</label>
                <input type='text' className="form-control" name='tips' onChange={handleChange} value={exercise.tips}/>
            </div>
            <div className="form-group">
                <label htmlFor='image'>Image:</label>
                <input type='text' className="form-control" name='image' onChange={handleChange} value={exercise.image}/>
            </div>
            <input type="submit"/>
            </form>
        </details>
        </>
    )
}

export default Edit