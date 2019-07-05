import React, { useState } from 'react'
import FlightList from '../flight-list/FlightList.jsx'
import Search from '../search/Search.jsx'
import Spinner from '../spinner'

const App = () => {

    const [flights, setFlights] = useState([])
    const [currency, setCurrency] = useState([])
    const [loading, setLoading] = useState(false)
    const [city, setCity] = useState({ departure: 'PRG', arrival: 'VLC' })
    const [checked, setChecked] = useState(false)
    const [page, setPage] = useState(0)


    const handleChangeDeparture = (e) => {
        const val = e.target.value
        setCity((prevState) => {
            return {
                ...prevState,
                departure: val,
            }
        }
        )
    }
    const handleChangeArrival = (e) => {
        const val = e.target.value
        setCity((prevState) => {
            return {
                ...prevState,
                arrival: val,
            }
        }
        )
    }

    const handleChangeDirect = e => e.target.checked ? setChecked(true) : setChecked(false)


    const handleClick = () => {
        setLoading(true)
        updateFlights()
    }

    const updateFlights = () => {
        fetch(`https://api.skypicker.com/flights?flyFrom=${city.departure}&to=${city.arrival}${checked ? '&max_stopovers=0' : ''}&dateFrom=06/07/2019&partner=picky&limit=15`)
            .then(res => res.json())
            .then(data => {
                setFlights(data.data)
                setCurrency(data.currency)
                setLoading(false)
            })
    }

    return (
        <>
            <Search
                handleChangeDeparture={handleChangeDeparture}
                handleChangeArrival={handleChangeArrival}
                handleChangeDirect={handleChangeDirect}
                handleClick={handleClick} />

            {(loading) ? <Spinner /> : <FlightList flights={flights} currency={currency} page={page}/>}
        <button onClick={()=>setPage((prevState)=>prevState-5)}>-</button>
        <button onClick={()=>setPage((prevState)=>prevState+5)}>+</button>
        
        </>
    );
}

export default App;