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
        const newCounters = counters.filter(c => c.id !== id)
        setCounters(newCounters)
    }
    const handleIncrement = (id) => {
        const newInitState = counters.map(elem => {
            if (elem.id === id) {
                elem.value++
            }
            return elem
        })
        setCounters(newInitState)
    }

    const handleDecrement = (id) => {
        const newInitState = counters.map(elem => {
            if (elem.id === id) {
                elem.value--
            }
            return elem
        })
        setCounters(newInitState)
    }
    const handleReset = () => {
        setCounters(initialState)
    }
    return (
        <>
            {counters.map((count) => (
                <Counter onDelete={handleDelete}
                         onIncrement={handleIncrement}
                         onDecrement={handleDecrement} {...count} />
            ))}
            <button className='btn btn-primary btn-sm m-2'
                    onClick={handleReset}>
                Сброс
            </button>
        </>
    )
}

export default CountersList