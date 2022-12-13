import {useState, useEffect} from 'react';
import axios from 'axios';

import Exercise from './components/Exercise';
import Add from './components/Add';
import Edit from './components/Edit';
import './App.css';

const App = () => {
  const [exercises, setExercises] = useState([])

  const [addExercise, setAddExercise] = useState(false)

  const [editExercise, setEditExercise] = useState(false)

    const getExercises = () => {
      axios.get('http://localhost:3000/workout')
      .then((response) => setExercises(response.data))
      .catch((error) => console.log(error))
    }

    const handleCreate = (data) => {
      axios.post('http://localhost:3000/workout', data)
      .then((response) => {
          console.log(response)
          let newExercises = [...exercises, response.data]
          setExercises(newExercises)
      })
      setAddExercise(false)
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

    const handleDelete = (exercise) => {
      axios.delete('http://localhost:3000/workout/' + exercise._id)
      .then((response) => {
        
        let newExercises = exercises.filter((deletedExercise) => {
          return exercise._id !== deletedExercise._id
        })
        setExercises(newExercises)
      })
    }

    const toggleAddExercise = () => {
      setAddExercise(prev => !prev)
    }

    const toggleEditExercise = () => {
      setEditExercise(prev => !prev)
    }

  useEffect(() => {
    getExercises()
  }, [])

  return(
    <div class="container">
      <h1>Swole</h1>
      <button class="btn btn-warning" onClick={toggleAddExercise}>Add Exercise</button>
      <div>
      {
        addExercise ? <Add handleCreate={handleCreate}/> : null
      }
      </div>
      <br/>
      <div className="card-deck">
      {exercises.map((exercise) => {
        return (
          <div className="card">
            <Exercise exercise={exercise}/>
            <button class="btn btn-warning" onClick={toggleEditExercise}>Edit</button>
                    <div>
                    {
                    editExercise ? <Edit handleEdit={handleEdit}/> : null
                    }
                </div>
                <button class="btn btn-danger" onClick={()=>{handleDelete(exercise)}}>Delete</button>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App