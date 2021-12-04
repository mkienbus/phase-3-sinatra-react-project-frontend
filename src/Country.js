
function Country({country}){
    console.log(country)
    return(
        <div>
            <h4>{country.name}</h4>
        </div>
    )
}

export default Country

// useEffect(() =>{
//     fetch("http://localhost:9292/countries")
//     .then((r) => r.json())
//     .then((data) => console.log(data));
//   }, [])