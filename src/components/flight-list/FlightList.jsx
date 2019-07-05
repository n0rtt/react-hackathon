import React from 'react'
import Flight from '../flight/Flight.jsx'


function FlightList({flights}) {
    return (
        <div>
            {flights.map(flight=>{
                <Flight flight={flight}/>
            })}
        </div>
    )
}

export default FlightList
