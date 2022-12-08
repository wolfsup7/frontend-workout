import {useState} from 'react'

const Edit = (props) => {
    const [workout, setWorkout] = useState({...props.workout})

    const handleChange = (event) => {
    setWorkout({...workout, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(workout)
    }

    return(
    <>
        <details>
            <summary>Edit Workout</summary>
            <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' onChange={handleChange} value={workout.name}/>
            <br/>
            <br/>
            <label htmlFor='musclegroup'>Muscle Group:</label>
            <input type='text' name='muscleGroup' onChange={handleChange} value={workout.muscleGroup}/>
            <label htmlFor='reps'>Recomended Reps:</label>
            <input type='text' name='reps' onChange={handleChange} value={workout.reps}/>
            <label htmlFor='rating'>Rating:</label>
            <input type='number' name='rating' onChange={handleChange} value={workout.rating}/>
            <label htmlFor='image'>Image:</label>
            <input type='text' name='image' onChange={handleChange} value={workout.image}/>
            <label htmlFor='comments'>Comments:</label>
            <input type='text' name='comments' onChange={handleChange} value={workout.comments}/>
            <label htmlFor='tips'>Tips:</label>
            <input type='text' name='tips' onChange={handleChange} value={workout.tips}/>
            <input type="submit"/>
            </form>
        </details>
    </>
    )
}

export default Edit

