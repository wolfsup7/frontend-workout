import {useState, useEffect} from 'react';
import axios from 'axios';
import Edit from './Edit';



const Exercise = (props) => {
    const [exercises, setExercises] = useState([])

    const [editExercise, setEditExercise] = useState(false)

    const getExercises = () => {
        axios.get('http://localhost:3000/workout')
        .then((response) => setExercises(response.data))
        .catch((error) => console.log(error))
    }

    const handleEdit = (data) => {
        axios.put('http://localhost:3000/workout/' + data._id, data)
        .then((response) => {
        console.log(response)
        let newExercises = exercises.map((exercise) => {
            return exercise._id !== data.id ? exercise : data
        })
        setExercises(newExercises)
        })
    }

    const handleDelete = (deletedExercise) => {
        axios.delete('http://localhost:3000/workout/' + deletedExercise._id)
        .then((response) => {

        let newExercises = exercises.filter((exercise) => {
            return exercise._id !== deletedExercise._id
        })
        setExercises(newExercises)
        })
    }

    const toggleEditExercise = () => {
        setEditExercise(prev => !prev)
    }

    useEffect(() => {
        getExercises()
    }, [])

    return(
        <div className="card">
            <img className="card-img-top bg-info text-white" alt="..." src={props.exercise.image}></img>
            <div className="card-body">
                <h5 className="card-title">Name: {props.exercise.name}</h5>
                <p className="card-text">Muscle: {props.exercise.muscle}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item bg-secondary">Recommended Reps: {props.exercise.reps}</li>
            </ul>
            <div className="card-body">
                <a href={props.exercise.tips} target="_blank" rel="noreferrer" className="btn btn-primary">Tips</a>
            </div>
            <button className="btn btn-warning" onClick={toggleEditExercise}>Edit</button>
                    <div>
                    {
                    editExercise ? <Edit handleEdit={handleEdit}/> : null
                    }
                </div>
                <button className="btn btn-danger" onClick={()=>{handleDelete(Exercise)}}>Delete</button>
        </div>
    )
}


export default Exercise


