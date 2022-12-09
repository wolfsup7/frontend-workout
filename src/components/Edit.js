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
            <summary>Edit Workout</summary>
            <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' onChange={handleChange} value={exercise.name}/>
            <br/>
            <br/>
            <label htmlFor='reps'>Recomended Reps:</label>
            <input type='number' name='reps' onChange={handleChange} value={exercise.reps}/>
            <br/>
            <br/>
            <label htmlFor='muscle'>Muscle:</label>
            <input type='text' name='muscle' onChange={handleChange} value={exercise.muscle}/>
            <br/>
            <br/>
            <label htmlFor='tips'>Tips:</label>
            <input type='text' name='tips' onChange={handleChange} value={exercise.tips}/>
            <br/>
            <br/>
            <label htmlFor='image'>Image:</label>
            <input type='text' name='image' onChange={handleChange} value={exercise.image}/>
            <br/>
            <input type="submit"/>
            </form>
        </details>
    </>
    )
}

export default Edit

