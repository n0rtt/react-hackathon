import React from 'react'
import { DateTime } from 'luxon';

const Flight = ({ flight, currency }) => (

    <div className='flight'>
        <div className='cities'>
            <div>{flight.cityFrom}</div>
            <div>{flight.flyFrom}</div>
        </div>
        <div className='cities'>
            <div>{flight.cityTo}</div>
            <div>{flight.flyTo}</div>
        </div>
        <div className='time'>
            <div>Departure time: {DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')}</div>
            <div>Arrival time: {DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')}</div>
        </div>
        <div className='price'>
            <div>Price: {flight.price}{currency}</div>
        </div>
        <div className='stopovers'>
            <div>Number of stopovers: {flight.route.length - 1}</div>
        </div>
    </div>
)


export default Flight
