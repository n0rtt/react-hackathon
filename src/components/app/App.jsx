import React, { useState, useEffect } from 'react'

const App = () => {

    const [flights, setFlights] = useState([])

    const updateFlights = () => {
        fetch('https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=06/07/2019&partner=picky&limit=5')
            .then(res => res.json())
            .then(data => console.log(data))

    }

    useEffect(() => {
        updateFlights()
    })

    return (
        <>
            {}
        </>
    );
}

export default App;