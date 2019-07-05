import React from 'react'

function Flight({flight}) {
    return (
        <div>
            <div>{flight.data.countryFrom}</div>
        </div>
    )
}

export default Flight
