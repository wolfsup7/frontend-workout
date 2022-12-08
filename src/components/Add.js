import {useState} from 'react'

const Add = (props) => {
    const [Exercise, setExercise] = useState({Name: '', Reps: '', Muscle: '', Tips: '',  Image: ''})

    const handleChange = (event) => {
    setExercise({...Exercise, [event.target.Name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(Exercise)
    }

    return(
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='Name'>Name:</label>
            <input type='Text' name='Name' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='Reps'>Recomended Reps:</label>
            <input type='Number' name='Reps' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='Muscle'>Muscle:</label>
            <input type='Text' name='Muscle' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='Tips'>Tips:</label>
            <input type='Text' name='Tips' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='Image'>Image:</label>
            <input type='Text' name='Image' onChange={handleChange}/>
            <br/>
            <br/>
            <input type="submit"/>
        </form>
    </>
    )
}

export default Add