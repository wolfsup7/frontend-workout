import {useState} from 'react'

const Add = (props) => {
    const [workout, setWorkout] = useState({name: '', muscleGroup: '', reps: '', rating: 0, image: '', comments: '', tips: ''})

    const handleChange = (event) => {
    setWorkout({...workout, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(workout)
    }

    return(
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='musclegroup'>Muscle Group:</label>
            <input type='text' name='muscleGroup' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='reps'>Recomended Reps:</label>
            <input type='text' name='reps' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='rating'>Rating:</label>
            <input type='number' name='rating' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='image'>Image:</label>
            <input type='text' name='image' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='comments'>Comments:</label>
            <input type='text' name='comments' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='tips'>Tips:</label>
            <input type='text' name='tips' onChange={handleChange}/>
            <br/>
            <br/>
            <input type="submit"/>
        </form>
    </>
    )
}

export default Add