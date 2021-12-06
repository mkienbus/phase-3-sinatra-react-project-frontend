
function Country({country, deleteCountry}){
    return(
        <div>
            <h4>{country.name} <button onClick = {() => deleteCountry(country.id)}>Remove Country</button></h4>
        </div>
    )
}

export default Country
