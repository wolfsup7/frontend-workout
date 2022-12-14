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
    <div className="d-flex flex-column justify-content-center">
        <form onSubmit={handleSubmit}>
            <div className="form-group d-flex justify-content-center">
            <label className="col-sm-2 col-form-label" htmlFor='name'>Name:</label>
            <input type='text' name='name' onChange={handleChange}/>
            </div>
            <div className="form-group d-flex justify-content-center">
            <label className="col-sm-2 col-form-label" htmlFor='reps'>Recomended Reps:</label>
            <input type='number' name='reps' onChange={handleChange}/>
            </div>
            <div className="form-group d-flex justify-content-center">
            <label className="col-sm-2 col-form-label" htmlFor='muscle'>Muscle:</label>
            <input type='text' name='muscle' onChange={handleChange}/>
            </div>
            <div className="form-group d-flex justify-content-center">
            <label className="col-sm-2 col-form-label" htmlFor='tips'>Tips:</label>
            <input type='text' name='tips' onChange={handleChange}/>
            </div>
            <div className="form-group d-flex justify-content-center">
            <label className="col-sm-2 col-form-label" htmlFor='image'>Image:</label>
            <input type='text' name='image' onChange={handleChange}/>
            </div>
            <br/>
            <div className="d-flex justify-content-center">
            <input className="col-sm-4 col-form-label" type="submit"/>
            </div>
        </form>
    </div>
    )
}

export default Add