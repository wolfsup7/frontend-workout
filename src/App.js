import {useState, useEffect} from 'react'
import axios from 'axios'

import Workout from './components/Workout'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
  const [workouts, setWorkouts] = useState([])

  const getWorkouts = () => {
    axios.get('http://localhost:3000/workout')
    .then((response) => setWorkouts(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/workout', data)
    .then((response) => {
        console.log(response)
        getWorkouts()
    })
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/workout/' + data._id, data)
    .then((response) => {
      console.log(response)
      getWorkouts()
    })
  }

  const handleDelete = (event) => {
    axios.delete('http://localhost:3000/workout/' + event.target.value)
    .then((response) => {
      getWorkouts()
    })
  }

  useEffect(() => {
    getWorkouts()
  }, [])

  return(
    <>
      <h1><a href='http://localhost:3000/workout'>Swole</a></h1>
      <Add handleCreate={handleCreate}/>
      {workouts.map((workout) => {
        return (
          <>
            <Workout workout={workout} />
            <Edit workout={workout} handleEdit={handleEdit}/>
            <button onClick={handleDelete} value={workout._id}>X</button>
          </>
        )
      })}
    </>
  )
}

export default App
