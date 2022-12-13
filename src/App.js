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
      axios.get('https://swole-seir.herokuapp.com/workout')
      .then((response) => setExercises(response.data), (err) => console.log(err))
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

    const handleEdit = (data) => {
      axios.put('https://swole-seir.herokuapp.com/workout/' + data._id, data)
      .then((response) => {
        console.log(response)
        
        let newExercises = exercises.map((exercise) => {
          return exercise._id !== data.id ? exercise : data
        })
        setExercises(newExercises)
      })
    }

    const handleDelete = (event) => {
      axios.delete('https://swole-seir.herokuapp.com/workout/' + event.target.value)
      .then((response) => {
        
        let newExercises = exercises.filter((exercise) => {
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
    <>
      <h1><a>Swole</a></h1>
      <Add handleCreate={handleCreate}/>
      {Exercises.map((exercise) => {
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