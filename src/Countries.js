import Country from "./Country"


// container component to render Country
function Countries ({countries}){
    console.log(countries)
    const allCountries = countries.map((c) => <Country country = {c} key = {c.id}/>)
    return(
        <div>
            <h2>Countries visited:</h2>
                {allCountries}
        </div>
    )
}

export default Countries

