import React, { useState, useEffect } from 'react'
import FlightList from '../flight-list/FlightList.jsx'
import Search from '../search/Search.jsx'

const App = () => {

    const [flights, setFlights] = useState([])
    const [currency, setCurrency] = useState([])
    const [loading, setLoading] = useState(false)
    const [city, setCity] = useState('VLC')

    const handleChange=(e)=>{
        setCity(e.target.value)
        console.log(city)
    }
    const handleClick=()=>{
        setLoading(true)
        updateFlights()
    }

    const updateFlights = () => {
        fetch(`https://api.skypicker.com/flights?flyFrom=PRG&to=${city}&dateFrom=06/07/2019&partner=picky&limit=5`)
            .then(res => res.json())
            .then(data => {
                setFlights(data.data)
                setCurrency(data.currency)
                setLoading(false)
            })
    }

   

    
    return (
        <>
            <Search handleChange={handleChange} handleClick={handleClick}/>
            {(loading) && <div>Loading...</div>}
            <FlightList flights={flights} currency={currency} />

        </>
    );
}

export default App;