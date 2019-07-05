import React, { useState, useEffect } from 'react'
import FlightList from '../flight-list/FlightList.jsx'

const App = () => {

    const [flights, setFlights] = useState([])
    const [currency, setCurrency] = useState([])

    const updateFlights = () => {
        fetch('https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=06/07/2019&partner=picky&limit=5')
            .then(res => res.json())
            .then(data => {
                setFlights(data.data)
                setCurrency(data.currency)
            })
    }

    useEffect(() => {
        updateFlights()
    },[])

    return (
        <>
        <FlightList flights={flights} currency={currency}/>
            
        </>
    );
}

export default App;