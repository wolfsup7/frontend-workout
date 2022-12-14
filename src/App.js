import {useState, useEffect} from 'react';
import axios from 'axios';

import Exercise from './components/Exercise';
import Add from './components/Add';
// import Edit from './components/Edit';
import './App.css';

const App = () => {
  const [exercises, setExercises] = useState([])

  const [addExercise, setAddExercise] = useState(false)


    const getExercises = () => {
      axios.get('https://swole-seir.herokuapp.com/workout')
      .then((response) => setExercises(response.data))
      .catch((error) => console.log(error))
    }

    const handleCreate = (data) => {
      axios.post('https://swole-seir.herokuapp.com/workout', data)
      .then((response) => {
          console.log(response)
          let newExercises = [...exercises, response.data]
          setExercises(newExercises)
      })
      setAddExercise(false)
    }

    // const handleEdit = (data) => {
    //   axios.put('https://swole-seir.herokuapp.com/workout/' + data._id, data)
    //   .then((response) => {
    //     console.log(response)

    //     let newExercises = exercises.map((exercise) => {
    //       return exercise._id !== data._id ? exercise : data
    //     })
    //     setExercises(newExercises)
    //   })
    // }

    // const handleDelete = (exercise) => {
    //   axios.delete('https://swole-seir.herokuapp.com/workout/' + exercise._id)
    //   .then((response) => {
        
    //     let newExercises = exercises.filter((deletedExercise) => {
    //       return exercise._id !== deletedExercise._id
    //     })
    //     setExercises(newExercises)
    //   })
    // }

      const toggleAddExercise = () => {
        setAddExercise(prev => !prev)
      }


  useEffect(() => {
    getExercises()
  }, [])

  return(
    <div className="container-fluid">
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="https://swole-workout.herokuapp.com">
      <h1 className="text-info">Swole</h1>
      </a>
    <button className="btn btn-outline-info" onClick={toggleAddExercise}>Add Exercise</button>
    </nav>
      <div>
      {
        addExercise ? <Add handleCreate={handleCreate}/> : null
      }
      </div>
      <br/>
      <div className="d-flex justify-content-around flex-wrap">
      {exercises.map((exercise) => {
        return (
          <div className="card bg-light border-info">
            <Exercise exercise={exercise}/>
            {/* <Edit exercise={exercise} handleEdit={handleEdit}/>
            <button className="btn btn-danger" onClick={()=>{handleDelete(exercise)}}>Delete</button> */}
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App