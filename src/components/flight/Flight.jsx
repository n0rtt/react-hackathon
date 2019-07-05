import React from 'react'

const Flight = ({ flight, currency }) => {
    return (
        <div>
            <div>{flight.flyFrom}</div>
            <div>{flight.flyTo}</div>
            <div>{flight.cityFrom}</div>
            <div>{flight.cityTo}</div>
            <div>{flight.dTime}</div>
            <div>{flight.aTime}</div>
            <div>{flight.price}{currency}</div>
        </div>
    )
}

export default Flight
