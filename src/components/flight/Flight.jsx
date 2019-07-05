import React from 'react'

const Flight = ({ flight, currency }) => {
    return (
        <div>
            <div>{flight.cityFrom}</div>
            <div>{flight.flyFrom}</div>
            <div>{flight.cityTo}</div>
            <div>{flight.flyTo}</div>
            <div>{flight.dTime}</div>
            <div>{flight.aTime}</div>
            <div>{flight.price}{currency}</div>
            <div>{flight.route.length - 1}</div>
        </div>
    )
}

export default Flight
