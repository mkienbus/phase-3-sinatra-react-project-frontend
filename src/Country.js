
function Country({country, deleteCountry}){
    console.log(country)
    return(
        <div>
            <h4>{country.name} <button onClick = {() => deleteCountry(country.id)}>Remove Country</button></h4>
        </div>
    )
}

export default Country

// useEffect(() =>{
//     fetch("http://localhost:9292/countries")
//     .then((r) => r.json())
//     .then((data) => console.log(data));
//   }, [])