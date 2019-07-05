import React from 'react'

const Search=({handleChangeArrival,handleChangeDeparture,handleClick})=>(
        <div>
            <select name="" id="" onChange={handleChangeDeparture}>
                <option value="PRG">Prague</option>
                <option value="BER">Berlin</option>
                <option value="WAW">Warsaw</option>
                <option value="PED">Pardubice</option>
            </select>
            <select name="" id="" onChange={handleChangeArrival}>
                <option value="VLC">Valencia</option>
                <option value="BCN">Barcelona</option>
                <option value="MAD">Madrid</option>
                <option value="MXP">Milano</option>
                <option value="ATH">Athens</option>
            </select>
            <button onClick={handleClick}>Search</button>
        </div>
)

export default Search



