import { useState } from 'react'

const Search = (props) => {
    const [searchVal, setSearchVal] = useState('');

    const handleInput = (e) => {
    e.preventDefault()
    setSearchVal(e.target.value);
    }

    const handleClearBtn = () => {
        setSearchVal('');
    }

    const filteredExercises = props.products.filter((exercise) => {
        return exercise.includes(searchVal);
    });

    return (
    <div className="container">
        <div className="input-wrap">
        <i className="fas fa-search">
        </i>
        <label for="exercise-search" id="input-label">
            Exercise and Muscle Group Search
        </label>
        <input
            onChange={handleInput}
            value={searchVal}
            type="text"
            name="product-search"
            id="product-search"
            placeholder="Exercise and Muscle Group Search"
            />
            <i onClick={handleClearBtn}
            className="fas fa-times">
            </i>
        </div>
        <div className="results-wrap">
            <ul>
            {filteredExercises.map((exercise) => {
            return <li key={exercise} className='list-item'><a href='https://swole-workout.herokuapp.com/workout/'>{exercise}</a></li>
            })}
        </ul>
        </div>
    </div>
    );
}


export default Search