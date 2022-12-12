import {useState, useEffect} from 'react';
import axios from 'axios';

import Exercise from './components/Exercise';
import Add from './components/Add';
import './App.css';

const App = () => {
  const [exercises, setExercises] = useState([])

  const [addExercise, setAddExercise] = useState(false)


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



    const toggleAddExercise = () => {
      setAddExercise(prev => !prev)
    }



  useEffect(() => {
    getExercises()
  }, [])

  return(
    <div className="container">
      <header className="d-flex p-2 bd-highlight bg-secondary justify-content-around">
      <img src="./Swole.png" alt="..."/>
      <button className="btn btn-warning align-self-end" onClick={toggleAddExercise}>Add Exercise</button>
      </header>
      <div>
      {
        addExercise ? <Add handleCreate={handleCreate}/> : null
      }
      </div>
      <br/>
      <div className="card-deck" >
      {exercises.map((exercise) => {
        return (
          <div>
            <Exercise exercise={exercise}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App