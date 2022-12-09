import {useState, useEffect} from 'react';
import axios from 'axios';

import Exercise from './components/Exercise';
import Add from './components/Add';
import Edit from './components/Edit';
import './App.css';

const App = () => {
  const [exercises, setExercises] = useState([])

    const getExercises = () => {
      axios.get('mongodb://localhost:27017/swole-api')
      .then((response) => setExercises(response.data), (err) => console.log(err))
      .catch((error) => console.log(error))
    }

    const handleCreate = (data) => {
      axios.post('mongodb://localhost:27017/swole-api', data)
      .then((response) => {
          console.log(response)
          getExercises()
      })
    }

    const handleEdit = (data) => {
      axios.put('mongodb://localhost:27017/swole-api' + data._id, data)
      .then((response) => {
        console.log(response)
        getExercises()
      })
    }

    const handleDelete = (event) => {
      axios.delete('mongodb://localhost:27017/swole-api' + event.target.value)
      .then((response) => {
        getExercises()
      })
    }

  useEffect(() => {
    getExercises()
  }, [])

  return(
    <div className="container">
      <h1>Swole</h1>
      <Add handleCreate={handleCreate}/>
      <div className="card-deck">
      {exercises.map((exercise) => {
        return (
          <div className="card">
            <Exercise exercise={exercise} />
            <Edit exercise={exercise} handleEdit={handleEdit}/>
            <button onClick={handleDelete} value={exercise._id}>X</button>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App