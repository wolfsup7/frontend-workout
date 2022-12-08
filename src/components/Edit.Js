import {useState} from 'react'

const Edit = (props) => {
    const [exercise, setExercise] = useState({...props.exercise})

    const handleChange = (event) => {
    setExercise({...exercise, [event.target.Name]: event.target.value})
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
            <label htmlFor='Name'>Name:</label>
            <input type='text' name='Name' onChange={handleChange} value={exercise.Name}/>
            <br/>
            <br/>
            <label htmlFor='Reps'>Recomended Reps:</label>
            <input type='Number' name='Reps' onChange={handleChange} value={exercise.Reps}/>
            <br/>
            <br/>
            <label htmlFor='Muscle'>Muscle:</label>
            <input type='Text' name='Muscle' onChange={handleChange} value={exercise.Muscle}/>
            <br/>
            <br/>
            <label htmlFor='Tips'>Tips:</label>
            <input type='Text' name='Tips' onChange={handleChange} value={exercise.Tips}/>
            <br/>
            <br/>
            <label htmlFor='Image'>Image:</label>
            <input type='Text' name='Image' onChange={handleChange} value={exercise.Image}/>
            <br/>
            <input type="submit"/>
            </form>
        </details>
    </>
    )
}

export default Edit

