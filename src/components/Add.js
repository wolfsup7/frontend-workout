import {useState} from 'react'

const Add = (props) => {
    const [exercise, setExercise] = useState({name: '', reps: '', muscle: '', tips: '',  image: ''})

    const handleChange = (event) => {
    setExercise({...exercise, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(exercise)
    }

    return(
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='reps'>Recomended Reps:</label>
            <input type='number' name='reps' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='muscle'>Muscle:</label>
            <input type='text' name='muscle' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='tips'>Tips:</label>
            <input type='text' name='tips' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='image'>Image:</label>
            <input type='text' name='image' onChange={handleChange}/>
            <br/>
            <br/>
            <input type="submit"/>
        </form>
    </>
    )
}

export default Add