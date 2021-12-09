import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'ненужная вещь', price: '200'},
        {id: 1, value: 4, name: 'ложка'},
        {id: 2, value: 0, name: 'вилка'},
        {id: 3, value: 0, name: 'тарелка'},
        {id: 4, value: 0, name: 'набор минималиста'}
    ]
    const [counters, setCounters] = useState(initialState)
    const handleDelete = (id) => {
        console.log('handleDelete: ', id)
        const newCounters = counters.filter(c => c.id !== id)
        // console.log(newCounters)
        setCounters(newCounters)
    }
    const handleReset = () => {
        setCounters(initialState)
        console.log('handle Reset')
    }
    return (
        <>
            {counters.map((count) => (
                <Counter onDelete={handleDelete} {...count} />
            ))}
            <button className='btn btn-primary btn-sm m-2'
            onClick={handleReset}>
                Сброс
            </button>
    </>
            )
}

export default CountersList