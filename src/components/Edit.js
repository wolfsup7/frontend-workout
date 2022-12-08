import {useState} from 'react'

const Edit = (props) => {
    const [Exercise, setExercise] = useState({...props.Exercise})

    const handleChange = (event) => {
    setExercise({...Exercise, [event.target.Name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(Exercise)
    }

    return(
    <>
        <details>
            <summary>Edit Workout</summary>
            <form onSubmit={handleSubmit}>
            <label htmlFor='Name'>Name:</label>
            <input type='text' name='Name' onChange={handleChange} value={Exercise.Name}/>
            <br/>
            <br/>
            <label htmlFor='Reps'>Recomended Reps:</label>
            <input type='Number' name='Reps' onChange={handleChange} value={Exercise.Reps}/>
            <br/>
            <br/>
            <label htmlFor='Muscle'>Muscle:</label>
            <input type='Text' name='Muscle' onChange={handleChange} value={Exercise.Muscle}/>
            <br/>
            <br/>
            <label htmlFor='Tips'>Tips:</label>
            <input type='Text' name='Tips' onChange={handleChange} value={Exercise.Tips}/>
            <br/>
            <br/>
            <label htmlFor='Image'>Image:</label>
            <input type='Text' name='Image' onChange={handleChange} value={Exercise.Image}/>
            <br/>
            <input type="submit"/>
            </form>
        </details>
    </>
    )
}

export default Edit