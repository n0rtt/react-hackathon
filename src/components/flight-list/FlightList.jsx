import React from 'react'
import Flight from '../flight/Flight.jsx'
import NotFound from './notfound.jpg'


const FlightList = ({ flights, currency,page}) =>{
    const fly=flights.filter((flight,index)=>(index>=page)&&(index<=page+4))
    console.log(fly)
    return(
        <div className='flight-list'>
            {!flights ? <div><img src={NotFound} alt='not found' /><h1>Flight not found...</h1></div> : fly.map((flight, index) =>
                <Flight key={index} flight={flight} currency={currency} />
            )}
        </div>
        )
}

export default FlightList
