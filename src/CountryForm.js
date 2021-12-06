import React, { useState } from "react"

function CountryForm({newCountry}){
    const [countryName, setCountryName] = useState("")
    const [continentId, setContinentId] = useState("")

function handleSubmit(e, countryName, continentId){
    e.preventDefault();
    newCountry(countryName, continentId);
}

    return (
        <div>
            <h3>Add a new country to your list</h3>
                <form onSubmit = {(e) => handleSubmit(e, countryName, continentId)}>
                    <label>Country Name:</label>
                    <input type = "text" name = "countryName" value = {countryName} onChange = {e => setCountryName(e.target.value)}/>
                    <label>Continent ID:</label>
                    <input type = "integer" name = "continentId" placeholder = "Refer to below table" value = {continentId} onChange = {e => setContinentId(e.target.value)}/>
                    <button type = "submit">Add Country</button>
                </form>
        </div>
    )


}

export default CountryForm;