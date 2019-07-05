import React, { useState, useEffect } from 'react'
import FlightList from '../flight-list/FlightList.jsx'
import Search from '../search/Search.jsx'
import Spinner from '../spinner'

const App = () => {

    const [flights, setFlights] = useState([])
    const [currency, setCurrency] = useState([])
    const [loading, setLoading] = useState(false)
    const [city, setCity] = useState({departure:'PRG',arrival:'VLC'})

    const handleChangeDeparture = (e) => {
        setCity(e.target.value)
        console.log(city.departure)
    }
    const handleChangeArrival = (e) => {
        setCity((prevState)=>{
            return {
                ...prevState,
                arrival:e.target.value,
            }
        }
        )
        console.log(city.arrival)
    }
    const handleClick = () => {
        setLoading(true)
        updateFlights()
    }

    const updateFlights = () => {
        fetch(`https://api.skypicker.com/flights?flyFrom=PRG&to=${city.departure}&dateFrom=06/07/2019&partner=picky&limit=5`)
            .then(res => res.json())
            .then(data => {
                setFlights(data.data)
                setCurrency(data.currency)
                setLoading(false)
            })
    }

    return (
        <>

            <Search handleChangeDeparture={handleChangeDeparture} handleChangeArrival={handleChangeArrival} handleClick={handleClick} />
            {(loading) && <Spinner />}
            <FlightList flights={flights} currency={currency} />

        </>
    );
}

export default App;