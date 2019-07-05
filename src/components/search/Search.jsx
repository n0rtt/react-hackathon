import React from 'react'

const Search=({handleChange,handleClick})=>(
        <div>
            <select name="" id="" onChange={handleChange}>
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



