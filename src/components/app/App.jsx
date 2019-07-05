import React, { useState, useEffect } from 'react'
import FlightList from '../flight-list/FlightList.jsx'
import Spinner from '../spinner'

const App = () => {

    const [flights, setFlights] = useState([])
    const [currency, setCurrency] = useState([])
    const [loading, setLoading] = useState(false)

    const updateFlights = () => {
        fetch('https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=06/07/2019&partner=picky&limit=5')
            .then(res => res.json())
            .then(data => {
                setFlights(data.data)
                setCurrency(data.currency)
                setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true)
        updateFlights()
    }, [])

    return (
        <>
            {(loading) && <Spinner />}
            <FlightList flights={flights} currency={currency} />

        </>
    );
}

export default App;