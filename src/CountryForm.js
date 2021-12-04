import React, { useState } from "react"

function CountryForm(){
    const [countryName, setCountryName] = useState("")
    const [continentId, setContinentId] = useState(0)

    return (
        <div>
            <h3>Add a new country to your list</h3>
                <form>
                    <label>Country Name:</label>
                    <input type = "text" name = "countryName" value = {countryName} onChange = {e => setCountryName(e.target.value)}/>
                    <button type = "submit">Add Country</button>
                </form>
        </div>
    )


}

export default CountryForm;