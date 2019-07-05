import React from 'react'
import { DateTime } from 'luxon';

const Flight = ({ flight, currency }) => (
    <div>
        <div className='flight'>
            <div className='cities'>
                Departure: <div>{flight.cityFrom}</div>
                <div>{flight.flyFrom}</div>
            </div>
            <div className='cities'>
                Arrival: <div>{flight.cityTo}</div>
                <div>{flight.flyTo}</div>
            </div>
            <div>
                <div>{DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')}</div>
                <div>{DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')}</div>
            </div>
            <div>
                <div>{flight.price}{currency}</div>
            </div>
            <div>
                <div>{flight.route.length - 1}</div>
            </div>
        </div>
    </div>
)


export default Flight
