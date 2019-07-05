import React from 'react'
import Flight from '../flight/Flight.jsx'


function FlightList({ flights, currency }) {
    return (
        <div>
            {flights.map((flight, index) =>
                <Flight key={index} flight={flight} currency={currency} />
            )}
        </div>
    )
}

export default FlightList
