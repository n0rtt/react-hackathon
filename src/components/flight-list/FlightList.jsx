import React from 'react'
import Flight from '../flight/Flight.jsx'
import NotFound from './notfound.jpg'


const FlightList = ({ flights, currency }) => {
    return (
        <div>
            {!flights ? <div><img src={NotFound} alt='not found' /><h1>Flight not found...</h1></div> : flights.map((flight, index) =>
                <Flight key={index} flight={flight} currency={currency} />
            )}
        </div>
    )
}

export default FlightList
