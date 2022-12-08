import {useState, useEffect} from 'react'
import axios from 'axios'

import Exercise from './components/Exercise'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
  const [Exercises, setExercises] = useState([])

    const getExercises = () => {
      axios.get('http://localhost:3000/workout')
      .then((response) => setExercises(response.data), (err) => console.log(err))
      .catch((error) => console.log(error))
    }

    const handleCreate = (data) => {
      axios.post('http://localhost:3000/workout', data)
      .then((response) => {
          console.log(response)
          getExercises()
      })
    }

    const handleEdit = (data) => {
      axios.put('http://localhost:3000/workout/' + data._id, data)
      .then((response) => {
        console.log(response)
        getExercises()
      })
    }

    const handleDelete = (event) => {
      axios.delete('http://localhost:3000/workout/' + event.target.value)
      .then((response) => {
        getExercises()
      })
    }

  useEffect(() => {
    getExercises()
  }, [])

  return(
    <>
      <h1><a href='http://localhost:3000/workout'>Swole</a></h1>
      <Add handleCreate={handleCreate}/>
      {Exercises.map((exercise) => {
        return (
          <>
            <Exercise exercise={Exercise} />
            <Edit exercise={Exercise} handleEdit={handleEdit}/>
            <button onClick={handleDelete} value={Exercise._id}>X</button>
          </>
        )
      })}
    </>
  )
}

export default App
