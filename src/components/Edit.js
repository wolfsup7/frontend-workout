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
            <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' onChange={handleChange} value={props.exercise.name}/>
            <br/>
            <br/>
            <label htmlFor='reps'>Recomended Reps:</label>
            <input type='number' name='reps' onChange={handleChange} value={props.exercise.reps}/>
            <br/>
            <br/>
            <label htmlFor='muscle'>Muscle:</label>
            <input type='text' name='muscle' onChange={handleChange} value={props.exercise.muscle}/>
            <br/>
            <br/>
            <label htmlFor='tips'>Tips:</label>
            <input type='text' name='tips' onChange={handleChange} value={props.exercise.tips}/>
            <br/>
            <br/>
            <label htmlFor='image'>Image:</label>
            <input type='text' name='image' onChange={handleChange} value={props.exercise.image}/>
            <br/>
            <br/>
            <input type="submit"/>
            </form>
        </>
    )
}

export default Edit